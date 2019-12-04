export interface CompStateInterface {
  data: number[];
  cursor: number;
  opCode: number;
  a: number;
  b: number;
  c: number;
}

export class IntComputer {
  private data: number[] = [];
  private cursor = 0;

  get state(): CompStateInterface {
    return {
      data: JSON.parse(JSON.stringify(this.data)),
      cursor: this.cursor,
      opCode: this.opCode,
      a: this.a,
      b: this.b,
      c: this.c,
    };
  }

  setPosition(index: number, val: number) {
    this.data[index] = val;
    return this;
  }

  get opCode() {
    return this.data[this.cursor];
  }

  get a() {
    return this.data[this.cursor + 1];
  }

  get b() {
    return this.data[this.cursor + 2];
  }

  get c() {
    return this.data[this.cursor + 3];
  }

  setInput(input: string) {
    this.data = input
      .split(',')
      .filter(x => x.length > 0)
      .map(x => parseInt(x, 10));
    this.cursor = 0;
  }

  private process() {
    switch (this.opCode) {
      case 99:
        return false;
      case 1:
        this.data[this.c] = this.data[this.a] + this.data[this.b];
        return true;
      case 2:
        this.data[this.c] = this.data[this.a] * this.data[this.b];
        return true;
    }
  }

  step() {
    const hasNext = this.process();
    if (hasNext) {
      this.cursor += 4;
    }
    return hasNext;
  }
}
