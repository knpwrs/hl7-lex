module.exports = (input) => {
  const [, field, component, repeat, escape, subComponent] = /^MSH(.)(.)(.)(.)(.)/.exec(input);
  return {
    field,
    component,
    repeat,
    escape,
    subComponent,
  };
};
