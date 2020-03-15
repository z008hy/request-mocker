interface Dictionary {
  [key: string]: string,
}

export class createRequestDto {
  readonly note: string;
  readonly name: string;
  readonly type: string;
  readonly url: string;
  readonly params: Dictionary;
  readonly headers: Dictionary;
  readonly mocker: string; 
}