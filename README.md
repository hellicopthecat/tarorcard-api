# Tarot Card API (0.1 ver)

타로 카드 API 한글판입니다.

Built by Node / Express
CloudType에서 무료 요금제로 배포하였습니다.

## How To Use

- ### 기본 URL

> BASE_URL : https://port-0-tarotcard-api-71t02clq12ozrb.sel4.cloudtype.app

- ### Major Card Arcana (메이저 카드)

> ${BASE_URL}/card/major

- ### Minor Card Arcana (메이저 카드)

- Cups
  > ${BASE_URL}/card/minor/cups
- Swords
  > ${BASE_URL}/card/minor/sword
- Wands
  > ${BASE_URL}/card/minor/wand
- Pentacles

  > ${BASE_URL}/card/minor/pentacle

## API STRUCTURE

```
{
  "total_card": number,
  "card": [
    {
      "id": number // 단일 숫자로 지정된 id값입니다.,
      "card_id": string // string으로 구성된 카드별 id값입니다.,
      "card_img": string // wikipedia에서 rider waite tarot 덱 이미지 입니다.,
      "card_arcana": string // 아르카나의 종류 입니다.,
      "card_name": [{"en": string}, {"ko": string}] // 카드의 이름입니다. 한글과 영어로 구성되어있습니다.,
      "card_suggestion": string // 카드가 나타내는 암시적 글입니다. 추후 Array로 변경 예정입니다.,
      "card_overview": string, // 카드의 전체적인 이미지에 대한 해석입니다.
      "card_personality": string, // 개인에 대한 설명을 나타낼 때 사용됩니다.
      "card_job": string, // Major 카드에는 관련 직업이 작성되있느나 Minor에는 추후 예정이며 Array로 변경 예정입니다.
      "card_mean_forword": [ // 정방향 카드에 대한 내용입니다. 카드의 전반적인 해석 / 연애 / 커리어 / 금전 / 건강 입니다.
        {
          "description": string
        },
        {
          "love": string
        },
        {
          "carrier": string
        },
        {
          "money": string
        },
        {
          "health": string
        }
      ],
      "card_mean_reverse": [ // 역방향 카드에 대한 내용입니다. 카드의 전반적인 해석 / 연애 / 커리어 / 금전 / 건강 입니다.
        {
          "description": string
        },
        {
          "love": string
        },
        {
          "carrier": string
        },
        {
          "money": string
        },
        {
          "health": string
        }
      ],
      "card_yesorno": string || Boolean // 추가질문시 및 간단한 Yes Or No 입니다. True는 Yes False는 No
  }
  ]
}
```
