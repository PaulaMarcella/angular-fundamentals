import { FormControl, AbstractControl } from '@angular/forms';

export function restrictedWords(words: any) {
  return (control: AbstractControl): { [key: string]: any } | null => {
    if (!words) return null;

    const invalidWords = words
      .map((word: string) => (control.value.includes(word) ? word : null))
      .filter((word: string) => word != null);

    return invalidWords && invalidWords.length > 0
      ? { restrictedWords: invalidWords.join(', ') }
      : null;
  };
}
