interface CnObj {
  [k: string]: boolean | undefined;
}

type CnParams = Array<CnObj | string | undefined>;

export const cn = (...args: CnParams) => {
  const classNames = [];

  for (let i = 0; i < args.length; i += 1) {
    if (typeof args[i] === "string") {
      classNames.push(args[i]);
    }
    if (
      typeof args[i] === "object" &&
      args[i] !== null &&
      args[i] !== undefined
    ) {
      const obj = args[i] as CnObj;
      Object.keys(obj).forEach((className) => {
        if (obj[className] === true) {
          classNames.push(className);
        }
      });
    }
  }

  return classNames.join(" ");
};
