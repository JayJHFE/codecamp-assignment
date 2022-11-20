import styled from "@emotion/styled"

export const ContentsBox = styled.div`
    width: 1000px;
    height: 30px;
`
export const PageBtn = styled.button`
  border: none;
  border-radius: 8px;
  padding: 8px;
  margin: 0;
  background: ${(props) => (props.isActive ? "lightgreen" : "black")};
  color: orange;
  font-size: 15px;

  &:hover {
    background: yellow;
    color: red;
    cursor: pointer;
    transform: translateY(-2px);
  }

  &[disabled] {
    background: grey;
    cursor: revert;
    transform: revert;
  }
`;

export const PNBtn = styled.button`
  border-radius: 15px;
  background: skyblue;
  font-size: 20px;

  &[disabled] {
    background: white;
    border: 1px solid #BDBDBD;
    color: #BDBDBD;
  }
`
export const Title = styled.span`
  margin: 10px 10px 10px 10px
`
export const Contents = styled.span`
  margin: 10px 10px 10px 10px
`