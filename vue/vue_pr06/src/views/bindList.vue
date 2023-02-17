<template>
  <div>
    <select name="" id="" v-model="selData">
      <option :value="city.title" v-for="city in cities" :key="city">
        {{ city.title }}
      </option>
    </select>
    <div>선택히신 배송지역은: {{ selData }}</div>
  </div>
  <hr />
  <div>
    <table>
      <tr>
        <th>No.</th>
        <th>카테고리</th>
        <th>제품명</th>
        <th>가격</th>
        <th>배송료</th>
        <th>수량</th>
        <th style="width: 100px">합계</th>
      </tr>
      <tr :key="i" v-for="(item, i) in productList">
        <td>{{ i + 1 }}</td>
        <td>{{ item.category }}</td>
        <td>{{ item.product_name }}</td>
        <td class="iprice"><input v-model.number="item.price" /></td>
        <td>
          {{
            selData !== '제주'
              ? item.delivery_price
              : item.delivery_price + 5000
          }}
        </td>
        <td>
          <input
            type="number"
            style="width: 50px; text-align: center"
            v-model="수량[i]"
          />
        </td>
        <td>
          {{
            (total[i] =
              item.price * 수량[i] +
              (수량[i] > 0
                ? selData !== '제주'
                  ? item.delivery_price
                  : item.delivery_price + 5000
                : 0))
          }}
        </td>
      </tr>
      <tr>
        <td id="sum-title" colspan="6">총합</td>
        <td>{{ (sum = total.reduce((a, c) => a + c, 0)) }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      sum: 0,
      selData: '',
      수량: [0, 0, 0, 0, 0],
      total: [],
      cities: [
        { title: '부산', code: '051' },
        { title: '서울', code: '02' },
        { title: '제주', code: '064' },
        { title: '창원', code: '055' },
        { title: '대구', code: '053' }
      ],

      productList: [
        {
          product_name: '기계식키보드',
          price: 25000,
          category: '노트북/태블릿',
          delivery_price: 5000
        },
        {
          product_name: '무선마우스',
          price: 12000,
          category: '노트북/태블릿',
          delivery_price: 3000
        },
        {
          product_name: '아이패드',
          price: 725000,
          category: '노트북/태블릿',
          delivery_price: 10000
        },
        {
          product_name: '태블릿거치대',
          price: 32000,
          category: '노트북/태블릿',
          delivery_price: 5000
        },
        {
          product_name: '무선충전기',
          price: 42000,
          category: '노트북/태블릿',
          delivery_price: 4000
        }
      ]
    }
  },
  methods: {}
}
</script>

<style>
table {
  margin: auto;
  border-collapse: collapse;
}
th,
td {
  padding: 5px;
  border: 1px solid #000;
}
th {
  background-color: lightskyblue;
}
#sum-title {
  background-color: gold;
}
.iprice {
  padding: 0px !important;
}
input,
input:focus {
  margin: 0px;
  padding: 3px;
  height: 100%;
  border: 0;
  text-align: center;
  outline: none;
  font-size: 1em;
}
</style>
