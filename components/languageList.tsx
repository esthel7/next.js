export default function LanguageList({ setView, setSelect }) {
  const Name = ({ ko, en }) => {
    const viewLanguage = () => {
      setView(false);
      setSelect(en);
    };

    return (
      <li
        onClick={viewLanguage}
        className="border border-b-white bg-darkGray cursor-pointer"
      >
        <div className="p-1">{ko}</div>
        <div className="p-1">{en}</div>
      </li>
    );
  };

  return (
    <ul className="scroll h-64 absolute border border-white rounded-md w-[calc(100%-40px)] top-24 overflow-y-auto z-10 100:top-20 100:w-[calc(100%-20px)]">
      <Name ko={'아랍어'} en={'ar'} />
      <Name ko={'불가리아어'} en={'bg'} />
      <Name ko={'크로아티아어'} en={'hr'} />
      <Name ko={'체코어'} en={'cs'} />
      <Name ko={'덴마크어'} en={'da'} />
      <Name ko={'독일어'} en={'de'} />
      <Name ko={'그리스어'} en={'el'} />
      <Name ko={'영어'} en={'en'} />
      <Name ko={'에스토니아어'} en={'et'} />
      <Name ko={'스페인어'} en={'es'} />
      <Name ko={'핀란드어'} en={'fi'} />
      <Name ko={'프랑스어'} en={'fr'} />
      <Name ko={'아일랜드어'} en={'ga'} />
      <Name ko={'힌디어'} en={'hi'} />
      <Name ko={'헝가리어'} en={'hu'} />
      <Name ko={'히브리어'} en={'he'} />
      <Name ko={'이탈리아어'} en={'it'} />
      <Name ko={'일본어'} en={'ja'} />
      <Name ko={'한국어'} en={'ko'} />
      <Name ko={'라트비아어'} en={'lv'} />
      <Name ko={'리투아니아어'} en={'lt'} />
      <Name ko={'네덜란드어'} en={'nl'} />
      <Name ko={'노르웨이어'} en={'no'} />
      <Name ko={'폴란드어'} en={'pl'} />
      <Name ko={'포르투갈어'} en={'pt'} />
      <Name ko={'스웨덴어'} en={'sv'} />
      <Name ko={'루마니아어'} en={'ro'} />
      <Name ko={'러시아어'} en={'ru'} />
      <Name ko={'세르비아어'} en={'sr'} />
      <Name ko={'슬로바키아어'} en={'sk'} />
      <Name ko={'슬로베니아어'} en={'sl'} />
      <Name ko={'태국어'} en={'th'} />
      <Name ko={'터키어'} en={'tr'} />
      <Name ko={'우크라이나어'} en={'uk'} />
      <Name ko={'중국어'} en={'zh'} />
      <Name ko={'선택해주세요'} en={'Choose'} />
    </ul>
  );
}
