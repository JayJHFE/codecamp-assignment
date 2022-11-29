import { useRecoilState } from "recoil";
import ExampleWrite from "../../../../src/components/units/example/write";
import { isEditState} from "../../../../src/commons/stores"
import { useEffect } from "react";

export default function RecoilEditPage(){
    const [isEdit, setIsEdit] = useRecoilState(isEditState);

    useEffect(() => {
        setIsEdit(true);
      }, []);
    return<ExampleWrite />
}
