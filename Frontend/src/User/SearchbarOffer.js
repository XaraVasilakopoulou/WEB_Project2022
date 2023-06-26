import React, { useState } from 'react';
import { TreeSelect } from 'antd';


export const SearchBar = (props) => {
  const [value, setValue] = useState();

  const onChange = (newValue) => {
    setValue(newValue);
  };

  const treeData = [
    {
      id: 1,
      value: 'Βρεφικά Είδη',
      title: 'Βρεφικά Είδη',
      children: [
        {
          id: 11,
          value: 'Πάνες',
          title: 'Πάνες',
          children: [
            {
              id:111,
              value: 'Babylino Πάνες Μωρού Sensitive 11 - 25κιλ No 5 18τεμ',
              title: <b style={{ color: '#08c' }}>Babylino Πάνες Μωρού Sensitive 11 - 25κιλ No 5 18τεμ</b>,
            },
            {
              id:112,
              value: 'Babylino Πάνες Μωρού Sensitive 16+ κιλ No 6 15τεμ',
              title: <b style={{ color: '#08c' }}>Babylino Πάνες Μωρού Sensitive 16+ κιλ No 6 15τεμ</b>,
            },
            {
              id:113,
              value: 'Babylino Πάνες Μωρού Sensitive 3-6κιλ Nο 2 26τεμ',
              title: <b style={{ color: '#08c' }}>Babylino Πάνες Μωρού Sensitive 3-6κιλ Nο 2 26τεμ</b>,
            },
            {
              id:114,
              value: 'Babylino Πάνες Μωρού Sensitive 9-20 κιλ Nο 4+ 19τεμ',
              title: <b style={{ color: '#08c' }}>Babylino Πάνες Μωρού Sensitive 9-20 κιλ Nο 4+ 19τεμ</b>,
            },
            {
              id:115,
              value: 'Pampers Active Baby No4+ 10-15κιλ 16τεμ',
              title: <b style={{ color: '#08c' }}>Pampers Active Baby No4+ 10-15κιλ 16τεμ</b>,
            }
          ],
        },
        {
          id: 12,
          value: 'Βρεφικές Τροφές',
          title: 'Βρεφικές Τροφές',
          children: [
            {
              id:121,
              value: 'Nestle Φαρίν Λακτέ 350γρ',
              title: <b style={{ color: '#08c' }}>Nestle Φαρίν Λακτέ 350γρ</b>,
            },
            {
              id:122,
              value: 'Nestle Φρουτοπουρές 4 Φρούτα 90γρ',
              title: <b style={{ color: '#08c' }}>Nestle Φρουτοπουρές 4 Φρούτα 90γρ</b>,
            },
            {
              id:123,
              value: 'Γιώτης Μπισκοτόκρεμα 300γρ',
              title: <b style={{ color: '#08c' }}>Γιώτης Μπισκοτόκρεμα 300γρ</b>,
            },
            {
              id:124,
              value: 'Γιώτης Κρέμα Παιδικη Φαρίν Λακτέ Μπισκότο 300γρ',
              title: <b style={{ color: '#08c' }}>Γιώτης Κρέμα Παιδικη Φαρίν Λακτέ Μπισκότο 300γρ</b>,
            },
            {
              id:125,
              value: 'Γιώτης Κρέμα Παιδική Φαρίν Λακτέ 300γρ',
              title: <b style={{ color: '#08c' }}>Γιώτης Κρέμα Παιδική Φαρίν Λακτέ 300γρ</b>,
            }
          ],
        },
      ],
    },
    {
      id:2,
      value: 'Καθαριότητα',
      title: 'Καθαριότητα',
      children: [
        {
          id:21,
          value: 'Απορρυπαντικά',
          title: 'Απορρυπαντικά',
          children: [
            {
              id:211,
              value: 'Ava Υγρό Πιάτων Perle Σύμπλεγμα Βιταμινών 430ml',
              title: <b style={{ color: '#08c' }}>Ava Υγρό Πιάτων Perle Σύμπλεγμα Βιταμινών 430ml</b>,
            },
            {
              id:212,
              value: 'Εύρηκα Σκόνη Antikalk 54γρ',
              title: <b style={{ color: '#08c' }}>Εύρηκα Σκόνη Antikalk 54γρ</b>,
            },
            {
              id:213,
              value: 'Persil Express Σκόνη Χεριού 420γρ',
              title: <b style={{ color: '#08c' }}>Persil Express Σκόνη Χεριού 420γρ</b>,
            },
            {
              id:214,
              value: 'Svelto Gel Υγρό Πιάτων Λεμόνι 500ml',
              title: <b style={{ color: '#08c' }}>Svelto Gel Υγρό Πιάτων Λεμόνι 500ml</b>,
            },
            {
              id:215,
              value: 'Svelto Gel Υγρό Πιάτων Με Ξύδι 500ml',
              title: <b style={{ color: '#08c' }}>Svelto Gel Υγρό Πιάτων Με Ξύδι 500ml</b>,
            }
          ],
        },
        {
          id:22,
          value: 'Χαρτικά',
          title: 'Χαρτικά',
          children: [
            {
              id:221,
              value: 'Delica Χαρτομάντηλα Αυτοκινήτου Λευκά Big 150τεμ',
              title: <b style={{ color: '#08c' }}>Delica Χαρτομάντηλα Αυτοκινήτου Λευκά Big 150τεμ</b>,
            },
            {
              id:222,
              value: 'Softex Χαρτοπετσέτες Λευκές 30x30 56τεμ',
              title: <b style={{ color: '#08c' }}>Softex Χαρτοπετσέτες Λευκές 30x30 56τεμ</b>,
            },
            {
              id:223,
              value: 'Zewa Deluxe Χαρτί Υγείας 3 Φύλλα 8τεμ',
              title: <b style={{ color: '#08c' }}>Zewa Deluxe Χαρτί Υγείας 3 Φύλλα 8τεμ</b>,
            },
            {
              id:224,
              value: 'Zewa Χαρ Υγείας Ultra Soft 8τεμ 912γρ',
              title: <b style={{ color: '#08c' }}>Zewa Χαρ Υγείας Ultra Soft 8τεμ 912γρ</b>,
            },
            {
              id:225,
              value: 'Zewa Χαρτί Υγείας Deluxe Χαμομήλι 3 Φύλλα 8τεμ 768γρ',
              title: <b style={{ color: '#08c' }}>Zewa Χαρτί Υγείας Deluxe Χαμομήλι 3 Φύλλα 8τεμ 768γρ</b>,
            }
          ],
        },
      ],
    },
    {
      id:3,
      value: 'Προσωπική φροντίδα',
      title: 'Προσωπική φροντίδα',
      children: [
        {
          id:31,
          value: 'Αποσμητικά',
          title: 'Αποσμητικά',
          children: [
            {
              id:311,
              value: 'Axe Αποσμ Σπρέυ Dark Temptation 150ml',
              title: <b style={{ color: '#08c' }}>Axe Αποσμ Σπρέυ Dark Temptation 150ml</b>,
            },
            {
              id:312,
              value: 'Axe Αποσμητικό Σπρέυ Africa 150ml',
              title: <b style={{ color: '#08c' }}>Axe Αποσμητικό Σπρέυ Africa 150ml</b>,
            },
            {
              id:313,
              value: 'Dove Αποσμ Σπρέυ 150ml',
              title: <b style={{ color: '#08c' }}>Dove Αποσμ Σπρέυ 150ml</b>,
            },
            {
              id:314,
              value: 'Noxzema Αποσμ Rollon Classic 50ml',
              title: <b style={{ color: '#08c' }}>Noxzema Αποσμ Rollon Classic 50ml</b>,
            }
          ],
        },
        {
          id:32,
          value: 'Σαμπουάν-Αφρόλουτρα',
          title: 'Σαμπουάν-Αφρόλουτρα',
          children: [
            {
              id:321,
              value: 'Axe Αφροντούς Africa 400ml',
              title: <b style={{ color: '#08c' }}>Axe Αφροντούς Africa 400ml</b>,
            },
            {
              id:322,
              value: 'Orzene Σαμπουάν Μπύρας Κανον 400ml',
              title: <b style={{ color: '#08c' }}>Orzene Σαμπουάν Μπύρας Κανον 400ml</b>,
            },
            {
              id:323,
              value: 'Orzene Condit Μπύρας Κανον Μαλλ 250ml',
              title: <b style={{ color: '#08c' }}>Orzene Condit Μπύρας Κανον Μαλλ 250ml</b>,
            },
            {
              id:324,
              value: 'Noxzema Αφρόλ Talc 750ml',
              title: <b style={{ color: '#08c' }}>Noxzema Αφρόλ Talc 750ml</b>,
            },
            {
              id:325,
              value: 'Ultrex Σαμπουάν Γυναικ Κανον 360ml',
              title: <b style={{ color: '#08c' }}>Ultrex Σαμπουάν Γυναικ Κανον 360ml</b>,
            }
          ],
        },
      ],
    },
    {
      id:4,
      value: 'Τρόφιμα',
      title: 'Τρόφιμα',
      children: [
        {
          id:41,
          value: 'Γάλα',
          title: 'Γάλα',
          children: [
            {
              id:411,
              value: 'Δέλτα Milko Γάλα Παστερ 250ml',
              title: <b style={{ color: '#08c' }}>Δέλτα Milko Γάλα Παστερ 250ml</b>,
            },
            {
              id:412,
              value: 'Μεβγάλ Γάλα Αγελ Λευκό Light 1,5% 500ml',
              title: <b style={{ color: '#08c' }}>Μεβγάλ Γάλα Αγελ Λευκό Light 1,5% 500ml</b>,
            },
            {
              id:413,
              value: 'Μεβγάλ Γάλα Αγελ Λευκό Πλήρες 3,5% 500ml',
              title: <b style={{ color: '#08c' }}>Μεβγάλ Γάλα Αγελ Λευκό Πλήρες 3,5% 500ml</b>,
            },
            {
              id:414,
              value: 'Νουνού Γάλα Εβαπορέ 170γρ',
              title: <b style={{ color: '#08c' }}>Νουνού Γάλα Εβαπορέ 170γρ</b>,
            },
            {
              id:415,
              value: 'Νουνού Γάλα Εβαπορέ Light 170γρ',
              title: <b style={{ color: '#08c' }}>Νουνού Γάλα Εβαπορέ Light 170γρ</b>,
            }
          ],
        },
        {
          id:42,
          value: 'Αλλαντικά',
          title: 'Αλλαντικά',
          children: [
            {
              id:421,
              value: 'Εν Ελλάδι Γαλοπούλα Καπνιστή Φέτες 160γρ',
              title: <b style={{ color: '#08c' }}>Εν Ελλάδι Γαλοπούλα Καπνιστή Φέτες 160γρ</b>,
            },
            {
              id:422,
              value: 'Εν Ελλάδι Μπέικον Καπνιστό Σε Φέτες 100γρ',
              title: <b style={{ color: '#08c' }}>Εν Ελλάδι Μπέικον Καπνιστό Σε Φέτες 100γρ</b>,
            },
            {
              id:423,
              value: 'Νίκας Γαλοπούλα Καπνιστή Φέτες 160γρ',
              title: <b style={{ color: '#08c' }}>Νίκας Γαλοπούλα Καπνιστή Φέτες 160γρ</b>,
            },
            {
              id:424,
              value: 'Υφαντής Γαλοπούλα Καπνιστή 160γρ',
              title: <b style={{ color: '#08c' }}>Υφαντής Γαλοπούλα Καπνιστή 160γρ</b>,
            },
            {
              id:425,
              value: 'Υφαντής Ζαμπόν Μπούτι Βραστό Σε Φέτες 160γρ',
              title: <b style={{ color: '#08c' }}>Υφαντής Ζαμπόν Μπούτι Βραστό Σε Φέτες 160γρ</b>,
            }
          ],
        },
      ],
    }
  ];

  return (
    <>
    {
    <TreeSelect
      showSearch
      style={{ width: '300%' }}
      value={value}
      dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
      placeholder="Please select"
      allowClear
      treeDefaultExpandAll
      onChange={(val)=>{props.onChange(val)}}
      treeData={treeData}
    />}
    </>
  );
};