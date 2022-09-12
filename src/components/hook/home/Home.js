import Input from "../../functional/Input/Input";
import Button from "../../functional/button/Button";

function Home(props) {
  let newName = "";

  function getName(event) {
    newName = event.target.value;
    console.log(newName);
    return newName;
  }

  function sendName() {
    props.callback(newName);
  }

  return (
    <>
      <div>
        <Input
          placeholder={"insert name"}
          lable={"Who is the brave challenger"}
          type={"text"}
          callback={getName}
        />
        <Button callback={sendName} />
      </div>
    </>
  );
}

export default Home;
