export class ClassName {
  static get(...classNames: (string | undefined)[]): string {
    return classNames.filter((className) => className).join(' ');
  }
}