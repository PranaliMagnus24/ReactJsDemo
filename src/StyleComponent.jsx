import styled from "styled-components";

function StyleComponent() {
  // const Heading=styled.h3`
  // color:red;
  // border:1px solid green;
  // `
  const Heading = styled.h3({
    color: "red",
    border: "1px solid green",
    width: "200px",
    margin: "40px",
    padding: "20px",
  });
  const Btn = styled.button`
    color: red;
    width: 200px;
    margin: 40px;
    padding: 20px;
  `;
  return (
    <div>
      <h3>Style Component</h3>
      <Heading>This is Style Component content1</Heading>
      <Heading>This is Style Component content2</Heading>
      <Heading>This is Style Component content3</Heading>
      <Heading>This is Style Component content4</Heading>
      <Heading>This is Style Component content5</Heading>
      <Btn>Login</Btn>
      <Btn>Logout</Btn>
    </div>
  );
}
export default StyleComponent;
