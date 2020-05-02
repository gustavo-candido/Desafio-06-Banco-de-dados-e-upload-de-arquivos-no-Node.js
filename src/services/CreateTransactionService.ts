// import AppError from '../errors/AppError';

import { getCustomRepository, getRepository } from 'typeorm';

import Transaction from '../models/Transaction';
import TransactionsRepository from '../repositories/TransactionsRepository';
import Category from '../models/Category';
import AppError from '../errors/AppError';

interface Request {
  title: string;
  value: number;
  type: 'income' | 'outcome';
  category: 'string';
}

class CreateTransactionService {
  public async execute({
    title,
    value,
    type,
    category,
  }: Request): Promise<Transaction> {
    const transactionsRepository = getCustomRepository(TransactionsRepository);
    const totalIncome = (await transactionsRepository.getBalance()).total;

    if (type === 'outcome' && value > totalIncome) {
      throw new AppError(
        'Not possible create a transaction without enought income',
      );
    }

    const categoriesRepository = getRepository(Category);
    let category_id;

    const categoryAlreadyExist = await categoriesRepository.findOne({
      where: { title: category },
    });

    if (!categoryAlreadyExist) {
      const newCategory = categoriesRepository.create({
        title: category,
      });

      await categoriesRepository.save(newCategory);

      category_id = newCategory.id;
    } else {
      category_id = categoryAlreadyExist.id;
    }

    const transaction = transactionsRepository.create({
      title,
      value,
      type,
      category_id,
    });

    await transactionsRepository.save(transaction);

    return transaction;
  }
}

export default CreateTransactionService;
