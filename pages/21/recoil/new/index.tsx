import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { isEditState } from "../../../../src/commons/stores";
import ExampleWrite from "../../../../src/components/units/example/write";

export default function RecoilNewPage(){
    const [isEdit, setIsEdit] = useRecoilState(isEditState);

    useEffect(() => {
        setIsEdit(false);
      }, []);
    

    return<ExampleWrite />
}