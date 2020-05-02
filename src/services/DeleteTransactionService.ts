// import AppError from '../errors/AppError';

import { getCustomRepository } from 'typeorm';

import TransactionRepository from '../repositories/TransactionsRepository';
import AppError from '../errors/AppError';

class DeleteTransactionService {
  public async execute(transactionId: string): Promise<void> {
    const transactionsRepository = getCustomRepository(TransactionRepository);

    const transaction = await transactionsRepository.findOne(transactionId);

    if (!transaction) {
      throw new AppError('Trying delete a not existent transaction');
    }

    await transactionsRepository.remove(transaction);
  }
}

export default DeleteTransactionService;
