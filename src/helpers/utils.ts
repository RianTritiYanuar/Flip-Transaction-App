import {transactionSort} from './constants';
import {Transaction} from '../types';

export const findSortByValue = (value: string) => {
  return transactionSort.find(item => item.value === value);
};

export const filteringAndSortingTransactions = (
  transactions: Transaction[],
  query: string,
  sort: string,
) => {
  return [...transactions]
    .filter(transaction => {
      const lowerCaseSearch = query.toLowerCase();
      return (
        transaction.beneficiary_name.toLowerCase().includes(lowerCaseSearch) ||
        transaction.beneficiary_bank.toLowerCase().includes(lowerCaseSearch) ||
        transaction.sender_bank.toLowerCase().includes(lowerCaseSearch) ||
        transaction.amount.toString().includes(query)
      );
    })
    .sort((a, b) => {
      if (sort === 'asc') {
        return a.beneficiary_name.localeCompare(b.beneficiary_name);
      } else if (sort === 'desc') {
        return b.beneficiary_name.localeCompare(a.beneficiary_name);
      } else if (sort === 'earlist') {
        return (
          new Date(a.created_at).getTime() - new Date(b.created_at).getTime()
        );
      } else if (sort === 'latest') {
        return (
          new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
        );
      }
      return 0;
    });
};
