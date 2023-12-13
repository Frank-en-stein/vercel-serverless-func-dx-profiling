export function squareNumber(num: number): number {
    return num * num;
}

export function canBeConvertedToNumber(value: string | null): boolean {
    if (value === null || value.trim().length === 0) {
      return false;
    }
    const num = Number(value);
    return !Number.isNaN(num);
}
  