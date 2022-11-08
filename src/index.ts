import * as _ from "lodash";
import * as R from "rambda";

export const CONVERTERS = {
  SNAKE: _.snakeCase,
  CAMEL: _.camelCase,
  KEBAB: _.kebabCase,
  PASCAL: R.compose((text) => text.replace(/ /g, ""), _.startCase, _.camelCase),
  MACRO: R.compose(R.toUpper, _.snakeCase),
};

const casilisk = <T extends Record<string, any> = Object, O = any>(
  object: T,
  convertor = CONVERTERS.SNAKE
): O => {
  const finalObject = Object.keys(object).map((key) => {
    const value = object[key];
    return [convertor(key), value];
  });

  return Object.fromEntries(finalObject);
};

export default casilisk;
