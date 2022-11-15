import { Modal } from "antd";
import { useState } from "react";
import DaumPostcodeEmbed from "react-daum-postcode";
import * as S from "./styles";

export default function ModalAㅣertPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [dpAddress, setDpAddress] = useState("")

  const onToggleModal = () => {
    setIsOpen((prev) => !prev);
  };
  
//   const displayAddress = () => {
//     setDpAddress(event.current)
//   }

  const handleComplete = (address: Address) => {
    onToggleModal();
    setDpAddress(address.address);
  };

  

  return (
    <>
      <S.Box>
      <button onClick={onToggleModal}>모달창 열기!!!!</button>
      <div>{dpAddress}</div>
      </S.Box>
      


      {/* 모달 종료 방식 -1. 모달 숨기는 방법(ex, 이력서 등) */}
      {/* <Modal
        open={isOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <DaumPostcodeEmbed onComplete={handleComplete}/>
      </Modal> */}
      {/* 모달 종료 방식 -2. 모달 삭제하는 방법 (ex, 신용카드, 비밀번호 등) */}
      {isOpen && (
        <Modal open={true} onOk={onToggleModal} onCancel={onToggleModal}>
          <DaumPostcodeEmbed onComplete={handleComplete} />
        </Modal>
      )}
    </>
  );
}
