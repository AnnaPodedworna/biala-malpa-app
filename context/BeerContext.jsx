import React, { createContext, useContext, useState } from 'react';

const BeerContext = createContext();

const defaultBeers = [
  {
    name: 'Trzech Kumpli Misty IPA',
    description: 'Trzy gatunki amerykańskiego chmielu grają w nim pierwsze skrzypce dając soczystą owocowość, zarówno w aromacie, jak i w smaku.Najpierw natkniesz się na grejpfruty, mango, liczi, limonki, ale też na agrest, białą porzeczkę i – nie żartujemy – białe wino, a potem dojdzie do Ciebie, bardzo gładka, lekko ziołowa gorycz. To wszystko zepnie w całość aksamitna pełnia, pochodząca od pszenicy i owsa, bez których to piwo nie byłoby takie samo. Alk. 5.5% / Ekstrakt: 15%. Chmiele główne: Mosaic, Galaxy, Columbus, Citra',
    image: '/images/misty.png'
  },
  {
    name: 'Trzech Kumpli Pan IPAni',
    description: 'Pan IPAni to doskonałe piwo na początek przygody ze stylem India Pale Ale oraz na pierwsze zetknięcie się ze zniewalająco aromatycznymi amerykańskimi chmielami. Jest hybrydą dwóch piwnych światów. Lekkość i zwiewność kojarzą się z piwem pszenicznym, zaś alkoholowa moc, goryczka i aromat pochodzą od stylu India Pale Ale. W aromacie dominują akcenty cytrusów, gruszek i mango przeplatane delikatnymi nutami kwiatowymi. Jasnozłote, lekko zamglone. W smaku cytrusowe, treściwe i umiarkowanie goryczkowe. Zbalansowane. Alk. 6% / Ekstrakt: 16.5%. Chmiele główne: Citra, Nelson Sauvin, Mosaic, Motueka',
    image: '/images/panipani.png'
  },
  {
    name: 'Trzech Kumpli Saison',
    description: 'Saison to styl, który narodził się w Walonii – francuskojęzycznej części Belgii. Tłumaczenie słowa “saison” to po prostu “sezon”. Piwa w tym stylu warzone było na farmach na początku wiosny, by mogło dojrzeć na okres letni. Miało orzeźwiać i krzepić pracowników ciężko pracujących przy żniwach. Otwarcie Sezonu to lekkie, przystępne, cytrusowe, bardzo orzeźwiające piwo, które będzie miłym wytchnieniem od mocno chmielonych i ogromnie aromatycznych IPA. Użyliśmy tylko klasycznych, szlachetnych odmian chmieli europejskich i dedykowanych drożdży “saisonowych”. W aromacie owocowe i goździkowo-ziołowe. W smaku kwaskowe, subtelnie goryczkowe i wytrawne. Żywe, a zarazem delikatne nagazowanie czyni go wyjątkowo zwiewnym i odświeżającym. Alk. 5.5% / Ekstrakt: 12.5%. Chmiele: Saaz, Iunga',
    image: '/images/saison.png'
  },
  {
    name: 'Trzech Kumpli Białe',
    description: 'W zasypie znalazł się oczywiście słód pszeniczny oraz płatki pszenne i słód owsiany, które nadają piwu aksamitnej tekstury. Do chmielenia użyto znanych europejskich odmian: East Kent Goldings – tradycyjnie wykorzystywanej do warzenia Witbiera oraz Hallertau Blanc – dla delikatnego, winogronowego finiszu. Dodano też skórkę słodkiej pomarańczy, skórkę gorzkiej pomarańczy Curaçao oraz ziarna kolendry. Alk. 5% / Ekstrakt: 12%. Chmiele: East Kent Goldings, Hallertau Blanc',
    image: '/images/biale.png'
  },
  {
    name: 'Trzech Kumpli Pils',
    description: 'Każdy, kto zna piwo zna również pilsa. Nie musimy zatem pisać długich wstępów przed degustacją.Słomkowy kolor, klarowny wygląd, śnieżnobiała, mleczna piana, zdecydowana, ale krótka i przyjemna gorycz oraz aromat jasnych słodów w parze ze szlachetnymi chmielami niemieckimi i czeskimi. To bardzo klasyczne, codzienne piwo. Wierzymy, że w naszym wydaniu po prostu solidnie wykonane. Alk. 4.4% / Ekstrakt: 10.5%. Chmiele: Saaz, Hallertau Mittelfrüh',
    image: '/images/pils.png'
  },
  {
    name: 'Trzech Kumpli American Wheat',
    description: 'Przykład piwa warzonego w bardzo amerykański, bezkompromisowy sposób – dużo alkoholowej mocy wspartej ogromem aromatycznego chmielu. To klasyczna amerykańska IPA dla tych, którzy lubią w piwie większą, nieco karmelową pełnię, ale jednocześnie zdecydowaną gorycz i tropikalny aromat. Zapach cytrusów i słodkich czerwonych owoców tropikalnych miesza się w nim z nutami żywicznymi i karmelowymi. Złoto-miedziane o wyraźnej grejpfrutowej goryczce, która opiera się na przyjemnym słodowym ciele. Jest mocne, a jednocześnie bardzo pijalne. Alk. 6.3% / Ekstrakt: 15%. Chmiele główne: Chinook, Amarillo, Simcoe, Mosaic, Citra, Cascade',
    image: '/images/american.png'
  }
];

export const BeerProvider = ({ children }) => {
  const [beers, setBeers] = useState(defaultBeers);

  const updateBeer = (index, newData) => {
    const updated = [...beers];
    updated[index] = {
      ...updated[index],
      ...newData,
    };
    setBeers(updated);
  };

  return (
    <BeerContext.Provider value={{ beers, updateBeer }}>
      {children}
    </BeerContext.Provider>
  );
};

export const useBeer = () => useContext(BeerContext);
