// Tesla sipariş saatinde yanlış tarayıcı zamanı algılamalarını önlemek için
// PC saatini doğru yansıtan custom fix
Object.defineProperty(window, 'Date', {
  value: class extends Date {
    constructor(...args) {
      if (args.length === 0) {
        super();
        return new Date(super().getTime() + 0); // zaman kaydırması isteniyorsa buraya ms eklenebilir
      }
      return new Date(...args);
    }

    static now() {
      return Date.prototype.getTime.call(new Date());
    }

    static parse(...args) {
      return Date.prototype.constructor.parse(...args);
    }

    static UTC(...args) {
      return Date.prototype.constructor.UTC(...args);
    }

    toString() {
      return new Date(super().getTime()).toString();
    }
  }
});
