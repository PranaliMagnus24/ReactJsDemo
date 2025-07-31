import { useTransition } from "react";

function UseTransition() {
  const [isPending, startTransition] = useTransition();

  const handleButton = () => {
    startTransition(() => {
      // Simulate an expensive operation (async)
      setTimeout(() => {
        console.log("Operation completed");
      }, 5000);
    });
  };

  return (
    <>
      <h3 style={{ color: "red" }}>Use Transition example for loader</h3>
      {isPending && (
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif"
          alt="loading"
          width={100}
        />
      )}
      <button disabled={isPending} onClick={handleButton}>
        Click here
      </button>
    </>
  );
}

export default UseTransition;
