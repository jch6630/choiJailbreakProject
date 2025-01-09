import { initializeApp } from "firebase/app";
// firestore를 불러오는 모듈을 임포트
import { getFirestore } from "firebase/firestore"

// Firebase 구성 정보 설정
const firebaseConfig = {
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId
};

  // Firebase 인스턴스 초기화
const app = initializeApp(firebaseConfig);

// firestore 객체 생성
const db = getFirestore(app);
// firestore export
export {db}