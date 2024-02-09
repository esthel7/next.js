import { useSetRecoilState } from 'recoil';
import { LanguageRecoil } from '@states';

function Name({ ko, en, setView }) {
  const setLanguage = useSetRecoilState(LanguageRecoil);
  const viewLanguage = () => {
    setLanguage(en);
    setView(false);
  };

  return (
    <li onClick={viewLanguage}>
      <div>{ko}</div>
      <div>{en}</div>
    </li>
  );
}

export default function LanguageList({ setView }) {
  return (
    <ul>
      <Name ko={'아랍어'} en={'ar'} setView={setView} />
      <Name ko={'불가리아어'} en={'bg'} setView={setView} />
      <Name ko={'크로아티아어'} en={'hr'} setView={setView} />
      <Name ko={'체코어'} en={'cs'} setView={setView} />
      <Name ko={'덴마크어'} en={'da'} setView={setView} />
      <Name ko={'독일어'} en={'de'} setView={setView} />
      <Name ko={'그리스어'} en={'el'} setView={setView} />
      <Name ko={'영어'} en={'en'} setView={setView} />
      <Name ko={'에스토니아어'} en={'et'} setView={setView} />
      <Name ko={'스페인어'} en={'es'} setView={setView} />
      <Name ko={'핀란드어'} en={'fi'} setView={setView} />
      <Name ko={'프랑스어'} en={'fr'} setView={setView} />
      <Name ko={'아일랜드어'} en={'ga'} setView={setView} />
      <Name ko={'힌디어'} en={'hi'} setView={setView} />
      <Name ko={'헝가리어'} en={'hu'} setView={setView} />
      <Name ko={'히브리어'} en={'he'} setView={setView} />
      <Name ko={'이탈리아어'} en={'it'} setView={setView} />
      <Name ko={'일본어'} en={'ja'} setView={setView} />
      <Name ko={'한국어'} en={'ko'} setView={setView} />
      <Name ko={'라트비아어'} en={'lv'} setView={setView} />
      <Name ko={'리투아니아어'} en={'lt'} setView={setView} />
      <Name ko={'네덜란드어'} en={'nl'} setView={setView} />
      <Name ko={'노르웨이어'} en={'no'} setView={setView} />
      <Name ko={'폴란드어'} en={'pl'} setView={setView} />
      <Name ko={'포르투갈어'} en={'pt'} setView={setView} />
      <Name ko={'스웨덴어'} en={'sv'} setView={setView} />
      <Name ko={'루마니아어'} en={'ro'} setView={setView} />
      <Name ko={'러시아어'} en={'ru'} setView={setView} />
      <Name ko={'세르비아어'} en={'sr'} setView={setView} />
      <Name ko={'슬로바키아어'} en={'sk'} setView={setView} />
      <Name ko={'슬로베니아어'} en={'sl'} setView={setView} />
      <Name ko={'태국어'} en={'th'} setView={setView} />
      <Name ko={'터키어'} en={'tr'} setView={setView} />
      <Name ko={'우크라이나어'} en={'uk'} setView={setView} />
      <Name ko={'중국어'} en={'zh'} setView={setView} />
    </ul>
  );
}
