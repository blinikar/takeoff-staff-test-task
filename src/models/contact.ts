export class Contact {
  private _name: string;
  private _contactBody: string;

  constructor(name: string, contactBody: string) {
    this._name = name;
    this._contactBody = contactBody;
  }


  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get contactBody(): string {
    return this._contactBody;
  }

  set contactBody(value: string) {
    this._contactBody = value;
  }
}
