export const formatDate = (date: string | Date): string => {
  const d = new Date(date);
  return d.toLocaleDateString('id-ID', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

export const formatRupiah = (value: number): string => {
  const numberFormat = new Intl.NumberFormat('id-ID').format(value);
  return `Rp${numberFormat}`;
};
