function Home() {
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
      <div className="home">
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
