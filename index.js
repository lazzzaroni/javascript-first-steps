const isTruthy = (value) => {
  return value ? true : false;
};

isTruthy("");
isTruthy(0);
isTruthy(-0);
isTruthy(null);
isTruthy(NaN);
isTruthy(false);
isTruthy(undefined);

isTruthy(1);
isTruthy(-1);
isTruthy(true);
isTruthy("true");
isTruthy("false");
isTruthy([1, 2, 3]);
isTruthy([]);
isTruthy({});
isTruthy(Infinity);
isTruthy(-Infinity);
