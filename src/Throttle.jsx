const ThrottleComponent = () => {
  let flag = true;

  const throttleFunc = (fun, timer) => {
    if (flag) {
      fun();
      flag = false;
      setTimeout(() => {
        flag = true;
      }, timer);
    }
  };

  const handleClick = () =>
    throttleFunc(() => console.log("Hi, throttled!!"), 3000);

  return (
    <div className="throttle">
      <h1 className="throttle__text">
        Hi!
        <br />
        This button is throttles..
      </h1>
      <button className="throttle__button" onClick={handleClick}>
        Try Me!!
      </button>
    </div>
  );
};

export default ThrottleComponent;
