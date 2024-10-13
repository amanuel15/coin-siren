import BoldText from "../atoms/bold-text";

export default function CompanyInfo() {
  return (
    <div className="my-8 flex flex-col md:flex-row md:justify-between gap-12 text-inactive">
      <div className="grid grid-cols-5 gap-2">
        <p className="col-span-3">상호명</p>
        <p className="col-span-2">
          대표 <span className="font-bold">CEO</span>
        </p>
        <p className="col-span-3">하이퍼하이어</p>
        <p className="col-span-2">김주현</p>
        <p className="col-span-3 font-bold">Hyperhire India Private Limited</p>
        <p className="col-span-2 font-bold">Juhyun Kim</p>
      </div>

      <div className="flex flex-col gap-2">
        <p>
          사업자등록번호 <span className="font-bold">CIN</span>
        </p>
        <p>427-86-01187</p>
        <p>U74110DL2016PTC290812</p>
      </div>
      <div className="flex flex-col gap-2">
        <BoldText>주소 ADDRESS</BoldText>
        <BoldText>서울특별시 강남대로 479, 지하 1층 238호 </BoldText>
        <BoldText>
          D-138, Street number 11, Jagjeet Nagar, North East Delhi, New Delhi,
          110053 India
        </BoldText>
      </div>
    </div>
  );
}
