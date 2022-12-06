import styled from "@emotion/styled"

export const FormWrapper = styled.form`
    width: 500px;
    height: 450px;
    margin: 0px 0px 20px 300px;
`
export const InputBox = styled.input`
    width: 500px;
    height: 50px;
    border-radius: 10px;
`
export const Btn = styled.button`
    width: 150px;
    height: 60px;
    background-color: yellow;
    margin-left: 170px;
`
export const TitleRow = styled.div`
  width: 700px;
  height: 50px;
  display: flex;
  font-size: 5px;
  flex-direction: row;
  font-weight: 400;
  color: black;
  text-align: center;
  border-bottom: 3px solid #e8db64;
  border-radius: 12px;
`;
export const TitleColumn = styled.div`
  width: 25%;
  line-height: 52px;
`;
export const ListBox = styled.div`
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0px 0px 100px 0px;
`;

export const Row = styled.div`
  border-bottom: 3px solid #df852a;
  border-radius: 12px;
  background-color: rgba(252, 241, 156, 0.7);
  width: 700px;
  height: 30px;
  display: flex;
  text-align: center;
  flex-direction: row;
  line-height: 20px;
  color: white;
  text-shadow: -1px 0px black, 0px 1px black, 1px 0px black, 0px -1px black;
`;
export const Column = styled.div`
  width: 25%;
  :hover {
    cursor: pointer;
    color: red;
  }
`;
export const BtnD = styled.button`
  width: 30px;
  height: 30px;
  color: red;
`