// pages/goods_detail/index.js
import { databaseadd, databaseupdate } from "../../asny/asny.js";
import {
  checkidandgets,
  togetUserProfile,
  checkcartinfoandgets,
} from "../../utils/ut.js";

Page({
  /**
   * 页面的初始数据
   */
  bzby: [
    "https://img.alicdn.com/imgextra/i1/2210072440085/O1CN01hWS6mw1CUyJuOT7fQ_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i3/2210072440085/O1CN01FFOS5l1CUyJsoys93_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i3/2210072440085/O1CN01GaB0n71CUyJvHlLAB_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i3/2210072440085/O1CN01RUvhbN1CUyJldoD5t_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i2/2210072440085/O1CN01EcBbSm1CUyJrfkd57_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i2/2210072440085/O1CN01PCRGZi1CUyJsp1gnC_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i3/2210072440085/O1CN01MWfoM41CUyJvHl0N4_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i3/2210072440085/O1CN01m6191V1CUyJuOVGkk_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i2/2210072440085/O1CN01ZYRZwF1CUyJpDZTvW_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i3/2210072440085/O1CN01YDPDRV1CUyJpDZ0pL_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i2/2210072440085/O1CN01wGmALk1CUyJpekMFF_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i1/2210072440085/O1CN017coILp1CUyJqazWQX_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i3/2210072440085/O1CN01DCC5vP1CUyJuOWsYJ_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i2/2210072440085/O1CN01qnBfje1CUyJnQqa06_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i1/2210072440085/O1CN01M3if5E1CUyJrfm2Q0_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i2/2210072440085/O1CN01I6npBH1CUyJuOVXQQ_!!2210072440085.jpg",
  ],
  xnhj: [
    "https://img.alicdn.com/imgextra/i2/2210072440085/O1CN01VYJQjO1CUyJttEpJj_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i1/2210072440085/O1CN011nO4Nd1CUyJvOLBKM_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i1/2210072440085/O1CN01oCG7701CUyJmwHAkO_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i2/2210072440085/O1CN01CDWJDl1CUyJpWYPWw_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i2/2210072440085/O1CN01uQG3zF1CUyJnXRQdQ_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i1/2210072440085/O1CN01dA2jsC1CUyJvrBZtS_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i3/2210072440085/O1CN01ZlCaQp1CUyJpWcIkQ_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i1/2210072440085/O1CN019bhiaO1CUyJttEDv2_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i1/2210072440085/O1CN01QFoNvS1CUyJnXQpFb_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i2/2210072440085/O1CN01EJThS21CUyJpKP667_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i3/2210072440085/O1CN01nMzFJv1CUyJpWZPxB_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i4/2210072440085/O1CN01wFLctm1CUyJgzihoR_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i4/2210072440085/O1CN01GuWjHZ1CUyJpWXsHY_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i1/2210072440085/O1CN01Hhj6AM1CUyJmwHAmc_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i3/2210072440085/O1CN01LLQ2E01CUyJqR14mh_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i4/2210072440085/O1CN01dZs2cT1CUyJvOJVPX_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i1/2210072440085/O1CN01h7y1Wq1CUyJpKLsWK_!!2210072440085.jpg",
  ],
  zpftq: [
    "https://img.alicdn.com/imgextra/i1/2210072440085/O1CN01xlzoOY1CUyJsTSIiX_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i3/2210072440085/O1CN01fxZig51CUyJriV9Ug_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i2/2210072440085/O1CN016ds0Cc1CUyJgvuWko_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i3/2210072440085/O1CN01yssi8G1CUyJuRFzZu_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i4/2210072440085/O1CN01uQNzNf1CUyJsrp1ul_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i2/2210072440085/O1CN014h5KiM1CUyJqNAwyq_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i1/2210072440085/O1CN01xve3IK1CUyJriWQW4_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i4/2210072440085/O1CN01xu3AL81CUyJgvuWm6_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i2/2210072440085/O1CN01IzaepJ1CUyJpGPEqp_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i2/2210072440085/O1CN01ooSShW1CUyJsrp1vt_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i4/2210072440085/O1CN01UDJXSH1CUyJvKWw68_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i3/2210072440085/O1CN01Q1V5bC1CUyJriWUhF_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i1/2210072440085/O1CN01Y3D8SJ1CUyJlgXrNm_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i3/2210072440085/O1CN01swo4Jb1CUyJqdhhAW_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i1/2210072440085/O1CN01Rj2faB1CUyJuRFWUV_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i3/2210072440085/O1CN01nY9X9j1CUyJpScypj_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i2/2210072440085/O1CN01YVnTzV1CUyJlgXrOp_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i2/2210072440085/O1CN01USycUK1CUyJtpLLNX_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i1/2210072440085/O1CN01OiPh0a1CUyJlgYb9z_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i2/2210072440085/O1CN01SipOQq1CUyJmsJjCe_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i1/2210072440085/O1CN01PxotrL1CUyJqNCDzd_!!2210072440085.jpg",
  ],
  drftq: [
    "https://img.alicdn.com/imgextra/i3/2210072440085/O1CN01aTOBUB1CUyJx0qDUY_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i1/2210072440085/O1CN01dOzPJT1CUyK02CIgV_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i1/2210072440085/O1CN01mvqi2o1CUyK21aD4b_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i3/2210072440085/O1CN01j9Q8de1CUyK21asco_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i2/2210072440085/O1CN01duInqZ1CUyJuQRKGK_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i2/2210072440085/O1CN01WG9YRV1CUyJoSuuVv_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i3/2210072440085/O1CN015HaOYE1CUyK1Pu85Y_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i1/2210072440085/O1CN01VaOVWV1CUyK3ORwFR_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i4/2210072440085/O1CN01tiT6VU1CUyJtBIOtX_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i2/2210072440085/O1CN01R8EkeI1CUyJx0qgcA_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i3/2210072440085/O1CN01I8xvGD1CUyK21cUPa_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i2/2210072440085/O1CN01b6mHZ81CUyK02BpaL_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i1/2210072440085/O1CN01D4dUQo1CUyJuQSKgC_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i1/2210072440085/O1CN01cF92A81CUyJzIJwvq_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i4/2210072440085/O1CN01AxHvTW1CUyJv25OFC_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i4/2210072440085/O1CN01LEAHyV1CUyK0QRe0O_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i2/2210072440085/O1CN01IFlA9R1CUyJxFNAXf_!!2210072440085.jpg",
  ],
  qzymby: [
    "https://img.alicdn.com/imgextra/i1/2210072440085/O1CN01R7dEVE1CUyJvlCnRD_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i4/2210072440085/O1CN01Sj2I5C1CUyJsRVSZb_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i4/2210072440085/O1CN016e5PgT1CUyJuPJHj4_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i3/2210072440085/O1CN01JzGalT1CUyJpEQmqR_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i1/2210072440085/O1CN01ooUHmP1CUyJpQiLtV_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i4/2210072440085/O1CN01xJVx6M1CUyJuPJ9Pg_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i2/2210072440085/O1CN01E132iQ1CUyJpEQNth_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i2/2210072440085/O1CN0109X9A31CUyJmqTOjg_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i3/2210072440085/O1CN01zss98m1CUyJvlCjIY_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i2/2210072440085/O1CN01v9CA4z1CUyJledVHJ_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i4/2210072440085/O1CN01MS1tZc1CUyJpfb7pw_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i4/2210072440085/O1CN01pWa6BA1CUyJpQhLXP_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i4/2210072440085/O1CN01WXX6Q81CUyJvlCOWK_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i4/2210072440085/O1CN01N71byt1CUyJpETP3C_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i4/2210072440085/O1CN01MtsfTj1CUyJqLHjco_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i4/2210072440085/O1CN01FUGa2G1CUyJspvHAZ_!!2210072440085.jpg",
  ],
  shsb: [
    "https://img.alicdn.com/imgextra/i1/2210072440085/O1CN01J5eh8Y1CUyJx4iJUt_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i4/2210072440085/O1CN013bo3IX1CUyJs4PSI2_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i2/2210072440085/O1CN01zYgXq91CUyJwKNd9m_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i1/2210072440085/O1CN01iaXY5a1CUyJlW8E08_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i2/2210072440085/O1CN01Qc7Wf51CUyJx4gVGN_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i3/2210072440085/O1CN01s0V0cf1CUyJxSqLLe_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i3/2210072440085/O1CN01r5gGNO1CUyJlWAqBM_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i2/2210072440085/O1CN01oLl7HS1CUyJs4RfWl_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i2/2210072440085/O1CN01LceAhY1CUyJqFTKZm_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i1/2210072440085/O1CN01pnHjTo1CUyJqFTnfZ_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i1/2210072440085/O1CN01E8QV9C1CUyJrSqlMc_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i4/2210072440085/O1CN01vZgL7n1CUyJvF24QF_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i2/2210072440085/O1CN01blBvHF1CUyJvF18DY_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i1/2210072440085/O1CN018KWAMg1CUyJwKOASj_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i2/2210072440085/O1CN01ZPIi2m1CUyJwKO29C_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i1/2210072440085/O1CN012AJXUJ1CUyJx4iFOy_!!2210072440085.jpg",
  ],
  hssyp: [
    "https://img.alicdn.com/imgextra/i1/2210072440085/O1CN0165qIVQ1CUyJsPkuGI_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i3/2210072440085/O1CN012XqVvl1CUyJsPli9k_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i3/2210072440085/O1CN01ZQwWgk1CUyJnQ1ctC_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i4/2210072440085/O1CN01uKyiqv1CUyJmooTp5_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i2/2210072440085/O1CN01OUOHjs1CUyJuNjGdR_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i3/2210072440085/O1CN01KeBF6J1CUyJgsRMOC_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i3/2210072440085/O1CN01WvvIx01CUyJpP3R6r_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i1/2210072440085/O1CN01zXCUHK1CUyJsoC45P_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i4/2210072440085/O1CN01RaqxPu1CUyJgsQtHW_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i4/2210072440085/O1CN011lCemb1CUyJsoEXvH_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i2/2210072440085/O1CN01bDzMxI1CUyJpP21ol_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i4/2210072440085/O1CN01VjNqky1CUyJqJXeFF_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i4/2210072440085/O1CN01Ml9IJc1CUyJqa85NM_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i3/2210072440085/O1CN0172Qhpc1CUyJvjXPLf_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i3/2210072440085/O1CN01yLQX5G1CUyJlcymwG_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i2/2210072440085/O1CN01z9FenX1CUyJld1078_!!2210072440085.jpg",
  ],
  jtzlhj: [
    "https://img.alicdn.com/imgextra/i3/2210072440085/O1CN01H1PGOH1CUyJpFRcmY_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i1/2210072440085/O1CN01auFPWk1CUyJpFThfb_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i4/2210072440085/O1CN01I5IRJy1CUyJsSQG0W_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i4/2210072440085/O1CN01PGZk561CUyJuQHhsN_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i3/2210072440085/O1CN01VegIft1CUyJuQIyr9_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i3/2210072440085/O1CN01M7MvbN1CUyJtoMJun_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i3/2210072440085/O1CN01lJiZEC1CUyJlfd84Y_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i2/2210072440085/O1CN01S3hWQS1CUyJqcmhO1_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i1/2210072440085/O1CN01E5YQ3E1CUyJuQIiGC_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i3/2210072440085/O1CN01VekISW1CUyJvmBLte_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i2/2210072440085/O1CN01zO9okh1CUyJtoOnlI_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i3/2210072440085/O1CN01GrJtGS1CUyJpgcZ7p_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i1/2210072440085/O1CN017tRoVq1CUyJgv18mZ_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i3/2210072440085/O1CN01IPQzqU1CUyJuQIiHJ_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i4/2210072440085/O1CN01jc5sgW1CUyJgv2HUH_!!2210072440085.jpg",
    "https://img.alicdn.com/imgextra/i4/2210072440085/O1CN01TnfxHc1CUyJqMD4GR_!!2210072440085.jpg",
  ],
  bzby2: {
    name: "鲍汁鲍鱼",
    title: "沁滋源鲍汁鲍鱼六只装汤汁家宴推荐送礼年货捞饭加热即食",
    price: 356,
    swiperimage: [
      "https://img.alicdn.com/imgextra/i1/2210072440085/O1CN01WwR4PB1CUyJpdnHp4_!!2210072440085.png",
      "https://img.alicdn.com/imgextra/i2/2210072440085/O1CN01Bs1FwC1CUyJoG7fVS_!!2210072440085.png",
      "https://img.alicdn.com/imgextra/i2/2210072440085/O1CN01MHJ8d01CUyJohXzIK_!!2210072440085.png",
      "https://img.alicdn.com/imgextra/i3/2210072440085/O1CN010PbqsO1CUyJvOdGCG_!!2210072440085.jpg",
    ],
  },
  xnhj2: {
    name: "香柠花胶",
    title: "沁滋源香柠花胶加热即食月子滋补富含胶原蛋白包邮新品推荐代餐",
    price: 82,
    swiperimage: [
      "https://img.alicdn.com/imgextra/i4/2210072440085/O1CN01EguUcz1CUyJmwJ7Sp_!!2210072440085.png",
      "https://img.alicdn.com/imgextra/i3/2210072440085/O1CN01uj22Sj1CUyJqR4EKy_!!2210072440085.png",
      "https://img.alicdn.com/imgextra/i3/2210072440085/O1CN01Eksh9H1CUyJvCnzgA_!!2210072440085.png",
      "https://img.alicdn.com/imgextra/i3/2210072440085/O1CN01oDfSQ91CUyJttFy9H_!!2210072440085.png",
      "https://img.alicdn.com/imgextra/i3/2210072440085/O1CN01o2GQK71CUyJuV7SVp_!!2210072440085.png",
    ],
  },
  zpftq2: {
    name: "珍品佛跳墙",
    title: "沁滋源佛跳墙干货加热即食海鲜礼盒海参鲜鲍鱼花胶盆菜年夜饭火锅",
    price: 556,
    swiperimage: [
      "https://img.alicdn.com/imgextra/i4/2210072440085/O1CN017nn3tv1CUyJlheXNX_!!2210072440085.png",
      "https://img.alicdn.com/imgextra/i4/2210072440085/O1CN01j4RApH1CUyJnUetRV_!!2210072440085.png",
      "https://img.alicdn.com/imgextra/i2/2210072440085/O1CN01pd4v8e1CUyJpTdorT_!!2210072440085.png",
      "https://img.alicdn.com/imgextra/i3/2210072440085/O1CN01MEzhBl1CUyJuSLzxi_!!2210072440085.png",
      "https://img.alicdn.com/imgextra/i3/2210072440085/O1CN01KETdGt1CUyJrqfRKo_!!2210072440085.jpg",
      "https://img.alicdn.com/imgextra/i4/2210072440085/O1CN01MEXVEH1CUyJlhfwki_!!2210072440085.png",
    ],
  },
  drftq2: {
    name: "单人佛跳墙",
    title: "沁滋源佛跳墙干货加热即食海鲜礼包参鲍鱼花胶盆菜年夜饭",
    price: 146,
    swiperimage: [
      "https://img.alicdn.com/imgextra/i1/2210072440085/O1CN01acZCvL1CUyJv25K30_!!2210072440085.png",
      "https://img.alicdn.com/imgextra/i4/2210072440085/O1CN01zvpQSd1CUyK0QQEdg_!!2210072440085.png",
      "https://img.alicdn.com/imgextra/i2/2210072440085/O1CN014bcplF1CUyJxw9Jed_!!2210072440085.png",
      "https://img.alicdn.com/imgextra/i4/2210072440085/O1CN01zh6eRO1CUyK1PtOKV_!!2210072440085.png",
      "https://img.alicdn.com/imgextra/i4/2210072440085/O1CN01hFaZuh1CUyJyBpMDO_!!2210072440085.png",
    ],
  },
  qzymby2: {
    name: "茄汁燕麦鲍鱼",
    title: "沁滋源茄汁燕麦鲍鱼单只装佛跳墙包邮加热即食鲜美低脂高蛋白",
    price: 68,
    swiperimage: [
      "https://img.alicdn.com/imgextra/i4/2210072440085/O1CN01T9BMGk1CUyK3snVbO_!!2210072440085.jpg",
      "https://img.alicdn.com/imgextra/i2/2210072440085/O1CN01UIu7n81CUyJuPOaOz_!!2210072440085.png",
      "https://img.alicdn.com/imgextra/i3/2210072440085/O1CN01Ar8SRC1CUyJpfgpa2_!!2210072440085.png",
      "https://img.alicdn.com/imgextra/i3/2210072440085/O1CN016CaqbB1CUyJqLMleI_!!2210072440085.png",
      "https://img.alicdn.com/imgextra/i4/2210072440085/O1CN01KuAJEm1CUyJleiP1C_!!2210072440085.png",
      "https://img.alicdn.com/imgextra/i2/2210072440085/O1CN01WPlMLF1CUyJtnRnHI_!!2210072440085.png",
    ],
  },
  shsb2: {
    name: "深海三宝",
    title: "沁滋源深海三宝花胶鱼皮海参年夜饭佛跳墙大盆菜原料单品",
    price: 56,
    swiperimage: [
      "https://img.alicdn.com/imgextra/i1/2210072440085/O1CN0105Veip1CUyJwKNA2k_!!2210072440085.png",
      "https://img.alicdn.com/imgextra/i3/2210072440085/O1CN01muxRXi1CUyJtrHYFV_!!2210072440085.png",
      "https://img.alicdn.com/imgextra/i1/2210072440085/O1CN01HJM2Bl1CUyJuIAdUP_!!2210072440085.png",
      "https://img.alicdn.com/imgextra/i3/2210072440085/O1CN01ffPHin1CUyJtrFwUW_!!2210072440085.png",
      "https://img.alicdn.com/imgextra/i1/2210072440085/O1CN01WMwv731CUyJtrFsLb_!!2210072440085.png",
    ],
  },
  hssyp2: {
    name: "红烧深海鱼皮",
    title: "沁滋源红烧深海鱼皮包邮推荐单人拌饭宴客胶原蛋白加热即食年饭",
    price: 36,
    swiperimage: [
      "https://img.alicdn.com/imgextra/i2/2210072440085/O1CN01BD3zSF1CUyJrf2eoi_!!2210072440085.jpg",
      "https://img.alicdn.com/imgextra/i3/2210072440085/O1CN01qCvs631CUyJnQAQ8S_!!2210072440085.jpg",
      "https://img.alicdn.com/imgextra/i4/2210072440085/O1CN01TsAC1y1CUyJpQjsar_!!2210072440085.jpg",
      "https://img.alicdn.com/imgextra/i1/2210072440085/O1CN01rxe5N31CUyJuNrrN7_!!2210072440085.png",
    ],
  },
  jtzlhj2: {
    name: "金汤杂粮花胶",
    title: "沁滋源金汤杂粮花胶加热即食鱼胶低脂胶质滋补月子孕妇无添加",
    price: 78,
    swiperimage: [
      "https://img.alicdn.com/imgextra/i3/2210072440085/O1CN01CZjQBL1CUyJpFOjqB_!!2210072440085.png",
      "https://img.alicdn.com/imgextra/i2/2210072440085/O1CN01DoNLjz1CUyJrkMTiP_!!2210072440085.png",
      "https://img.alicdn.com/imgextra/i1/2210072440085/O1CN01TRTc1y1CUyJuQGEFl_!!2210072440085.png",
      "https://img.alicdn.com/imgextra/i2/2210072440085/O1CN01ymcOIl1CUyJlfaVnP_!!2210072440085.png",
      "https://img.alicdn.com/imgextra/i2/2210072440085/O1CN01t2ENMg1CUyJmrNn0z_!!2210072440085.png",
      "https://img.alicdn.com/imgextra/i3/2210072440085/O1CN019plDtj1CUyJpgb9d7_!!2210072440085.png",
    ],
  },
  data: {
    goodsdetial: [], //接受商品详情页链接
    animationDataSel: {}, //动态弹出框所需参数
    selHidden: true, //模态框是否隐藏
    goodsnum: 1, //要购买商品数量
    error: "", //错误提示
    propBan: "ban",
    goodsinfo: {}, //商品信息
    mpbadge: false, //购物车角标初始为不显示
    carttotalnum: 0, //购物车物品总数
  },

  goodsid: "", //商品id
  userid: false, //用户是否存在
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
    let a;
    let goodsinfo;
    switch (options.goodsid) {
      case "bzby":
        a = this.bzby;
        goodsinfo = this.bzby2;
        break;
      case "xnhj":
        a = this.xnhj;
        goodsinfo = this.xnhj2;
        break;
      case "zpftq":
        a = this.zpftq;
        goodsinfo = this.zpftq2;
        break;
      case "drftq":
        a = this.drftq;
        goodsinfo = this.drftq2;
        break;
      case "qzymby":
        a = this.qzymby;
        goodsinfo = this.qzymby2;
        break;
      case "shsb":
        a = this.shsb;
        goodsinfo = this.shsb2;
        break;
      case "hssyp":
        a = this.hssyp;
        goodsinfo = this.hssyp2;
        break;
      case "jtzlhj":
        a = this.jtzlhj;
        goodsinfo = this.jtzlhj2;
        break;
    }
    this.setData({
      goodsdetial: a,
      goodsinfo,
    });
    this.goodsid = options.goodsid;
    this.userid = await checkidandgets();
    this.smbp();
  },
  //设置购物车角标
  async smbp() {
    let cartid = await checkcartinfoandgets();
    if (cartid) {
      //加入过购物车
      let cart = wx.getStorageSync(`cart`) || [];
      let carttotalnum = 0;
      let mpbadge = false;
      cart.forEach((v) => {
        carttotalnum += v.num;
      });
      if (carttotalnum) {
        mpbadge = true;
      }
      this.setData({ carttotalnum, mpbadge });
    }
  },
  aonum(e) {
    //选择数量
    const { num } = e.currentTarget.dataset;
    console.log(num);
    let goodsnum = this.data.goodsnum + num;
    //按钮加减样式
    if (goodsnum <= 1) {
      this.setData({
        propBan: "ban",
        plusBan: "",
      });
    } else if (goodsnum >= 999) {
      this.setData({
        propBan: "",
        plusBan: "ban",
      });
    } else {
      this.setData({
        propBan: "",
        plusBan: "",
      });
    }
    //警告提示
    if (goodsnum <= 0) {
      this.setData({
        error: "数量应大于0",
      });
    } else if (goodsnum > 999) {
      this.setData({
        error: "数量不可大于999",
      });
    } else {
      this.setData({
        goodsnum,
      });
    }
  }, //加减数量

  //轮播点击放大
  handlpreviewImage(e) {
    // console.log("aa");
    //构造要预览的数组 urls
    const previewImageurl = this.data.goodsinfo.swiperimage.map((v) => v);
    // console.log(e.currentTarget.dataset.index);
    //console.log(previewImageurl);
    // 获取当前显示图片的http链接;
    const cyrrent = e.currentTarget.dataset.index;
    console.log(cyrrent);
    wx.previewImage({
      current: cyrrent, // 当前显示图片的http链接
      urls: previewImageurl, // 需要预览的图片http链接列表
    });
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  // 初次渲染加载要执行的动画
  onReady: function () {
    this.animation = wx.createAnimation({
      //动画
      duration: 300, //动画持续时间
      timingFunction: "linear", //动画的效果 动画从头到尾的速度是相同的
      transformOrigin: "50% 50% 0",
    });
  },

  //上弹窗口确认加入购物车 此时用户已授权 将数据
  //111】获取购物车缓存？
  //222】
  //1存在缓存：判断现在货物是否已经在数组？a存在于缓存数组中则 修改数据库和缓存购物车num+this.data.goodsnum
  //                                  b不存在于缓存数组中则 数据库和缓存中购物车数组加多一个 和对应num
  //2不存在缓存      查询是否存在于数据库？a数据库存在购物车数组 修改对应num 缓存获取购物车数组
  //                                    b数据库新增条目 缓存获取购物车数组
  //333】最终重置this.data.goodsnum=1  修改数据库购物车数组则修改缓存中购物车数组
  async addgoods() {
    const res = await checkcartinfoandgets();
    if (!res) {
      //没有创建过购物车：数据库添加该用户的该商品信息
      wx.showLoading({
        title: "添加数据中",
        mask: true,
      });
      console.log("缓存和数据库都没有购物车数组");
      const cartdata = [
        {
          addtime: new Date(),
          goodsid: this.goodsid,
          goodsname: this.data.goodsinfo.name,
          price: this.data.goodsinfo.price,
          num: this.data.goodsnum,
          select: true,
          pic: this.data.goodsinfo.swiperimage[0],
        },
      ];
      const adddata = {
        cart: cartdata,
      };
      //存入数据库
      databaseadd({ collection: "cartinfo", adddata });
    } else {
      console.log("存在购物车数组");
      let cart = wx.getStorageSync(`cart`) || [];
      console.log(cart);
      let cartindex = cart.findIndex((v) => v.goodsid === this.goodsid); //findIndex 不存在时cartindex=-1 存在时=所在位置
      console.log("cartindex", cartindex);
      const { _openid } = wx.getStorageSync("userid")[0]; //*
      ///A种传值
      const wherecondition = { _openid: _openid };
      let data;
      if (cartindex === -1) {
        //没有加入购物车过 不存在
        const updatedata = {
          addtime: new Date(),
          goodsid: this.goodsid,
          goodsname: this.data.goodsinfo.name,
          price: this.data.goodsinfo.price,
          num: this.data.goodsnum,
          select: true,
          pic: this.data.goodsinfo.swiperimage[0],
        };
        ///B种传值
        data = {
          cart: wx.cloud.database().command.push([updatedata]),
        };
        cart.push(updatedata);
      } else {
        console.log("商品已经存在于购物车数组，仅需修改数字");
        //存在于购物车 执行数量num++
        cart[cartindex].num += this.data.goodsnum;
        //更新cart数组下标为cartindex的num属性的值
        data = {
          ["cart." + cartindex + ".num"]: cart[cartindex].num,
        };
      }
      //数据库更新且缓存更新
      databaseupdate({ collection: "cartinfo", wherecondition, data });
      wx.setStorageSync("cart", cart);
    }
    this.smbp();
    wx.hideLoading();
    this.hiddenSel();

    wx.showToast({
      title: "加入成功",
      icon: "success",
      mask: true,
    });
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {},

  //点击加入购物车触发事件
  //  用户是否登录？1是则继续  2否则要求登录
  //已登录 触发上弹窗口动画 选择数目
  async addcat() {
    if (this.userid) {
      //已经登陆
      console.log("this.userid", this.userid);
      this.setData({ addorbuy: true }); //显示购买或加入购物车按钮
      this.showSelBox();
    } else {
      console.log(this.userid);
      this.userid = await togetUserProfile(); //未登录 弹窗获取授权
    }
  },

  //购买事件
  async buyit() {
    if (this.userid) {
      //已经登陆
      console.log("this.userid", this.userid);
      this.setData({ addorbuy: false }); //显示购买或加入购物车按钮
      this.showSelBox();
    } else {
      console.log(this.userid);
      this.userid = await togetUserProfile(); //未登录 弹窗获取授权
    }
  },
  //显示窗口
  showSelBox: function () {
    //显示选项
    let that = this;
    let systemInfo = wx.getSystemInfoSync();
    // console.log("getSystemInfoSync");
    // console.log(systemInfo);
    //上弹980rpx高度的窗口 通过systemInfo获取窗口大小并转为对应rpx
    let px = (550 / 750) * systemInfo.windowWidth;

    this.animation.translateY(-px).step(); //在Y轴偏移tx，单位px

    this.setData({
      //通过绑定的animationDataSel用export()把动画表现出来
      animationDataSel: that.animation.export(),
      //模糊背景显示出来
      selHidden: false,
    });
  },
  // 隐藏窗口
  hiddenSel: function () {
    //隐藏选项
    let animation = wx.createAnimation({
      //动画
      duration: 300, //动画持续时间
      timingFunction: "linear", //动画的效果 动画从头到尾的速度是相同的
      transformOrigin: "50% 50% 0",
    });
    let systemInfo = wx.getSystemInfoSync();
    let px = (550 / 750) * systemInfo.windowWidth;
    animation.translateY(px).step(); //在Y轴偏移tx，单位px
    this.setData({
      animationDataSel: animation.export(),
      selHidden: true,
    });
  },
});
