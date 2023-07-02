# 대전시 상가조회 웹서비스
## 1️⃣새로 알게 된 점
### ❤️ 가운데 정렬!
  1. justify-content-center로 수평 중앙정렬
      ```html
      <div class="container">
        <div class="d-flex justify-content-center">
          어쩌구
        </div>
      </div>
      ```
2. 덜 움직였다면 상위div를 수직 flex
    ```css
    .container{
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    ```
### ❤️ 카드 예쁘게 배치하는법
1. flex-wrap의 위력!!
    ```css
    .card-container{
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
    ```
2. 부트스트랩 : 라지, 미디엄, 스몰 (row안에 넣어야해)
    ```html
    <div class="row">
      <div class="col-lg-3 col-md-4 col-sm-6">
        카드내용
      </div>
    </div>
    ```
### 🫶스크롤바 
- 보이는데까지만 보이고 안보이는 부분은 스크롤로 볼 수 있게 하는법
  ```css
  .card-container{
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  }
  .card {
  flex: 0 0 auto;
  }
  ```
### 🫶 랜덤넘버 10개 추출
  ```javascript
  import _ from 'lodash'

  export default {
    data(){
      return {
        randomNumber:[],
      }
    },
    methods: {
      getRandomNumber(){
        this.randomNumber = _.sampleSize(_.range(1,20), 10)
      }
    },
    mounted(){
      this.getRandomNumber()
    },
  }
  ```
## 2️⃣ 추가할 기능
- navbar에 하버 효과 넣기
- 가나다 정렬
- 회원가입 / 로그인
- 내 장소로 등록
- 내 개인 페이지 : 사업분류, 지역별로 보여주기
- 검색기능추가
- 경도, 위도 넣어서 카카오맵api로 연동 : 모달창으로 보여주기
- 모달창에 사진도 카카오 업체사진 넣어주기
- 내 위치에서 거리 계산해서 알려주기

## 3️⃣ 진행경과
### '23.07.02
![daejeon-stores-app(0702)](https://github.com/badahae88/daejeon-stores-vue/assets/137893145/ef9cbb51-e39b-482f-9655-06533c5463ff)
