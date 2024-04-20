import type { z } from "zod";

import { schemas } from "../../generated/api.client";
import { WEIGHTS } from "../weights";

export const US_BANK_CARDS: z.input<typeof schemas.CreditCard>[] = [
  {
    name: "Business Altitude Power",
    issuer: schemas.IssuersEnum.enum.US_BANK,
    network: schemas.NetworksEnum.enum.MASTERCARD,
    currency: schemas.CurrenciesEnum.enum.US_BANK,
    isBusiness: true,
    annualFee: 195,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 2,
    url: "https://www.usbank.com/business-banking/business-credit-cards/business-altitude-power-world-elite-mastercard.html",
    imageUrl: "/images/usbank/altitude-power.webp",
    credits: [],
    offers: [
      {
        amount: [{ amount: 75_000 }],
        spend: 10_000,
        days: 120,
        credits: [],
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 75_000 }],
        spend: 10_000,
        days: 120,
        credits: [],
      },
    ],
  },
  {
    name: "Business Altitude Connect",
    issuer: schemas.IssuersEnum.enum.US_BANK,
    network: schemas.NetworksEnum.enum.MASTERCARD,
    currency: schemas.CurrenciesEnum.enum.US_BANK,
    isBusiness: true,
    annualFee: 95,
    isAnnualFeeWaived: true,
    universalCashbackPercent: 2,
    url: "https://www.usbank.com/business-banking/business-credit-cards/business-altitude-connect-world-elite-mastercard.html",
    imageUrl: "/images/usbank/business-altitude-connect.webp",
    credits: [],
    offers: [
      {
        amount: [{ amount: 60_000 }],
        spend: 6000,
        days: 180,
        credits: [],
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 60_000 }],
        spend: 6000,
        days: 180,
        credits: [],
      },
    ],
  },
  {
    name: "Altitude Connect",
    issuer: schemas.IssuersEnum.enum.US_BANK,
    network: schemas.NetworksEnum.enum.VISA,
    currency: schemas.CurrenciesEnum.enum.US_BANK,
    isBusiness: false,
    annualFee: 95,
    details: "Points cannot be transferred, so are valued at 1cpp.",
    isAnnualFeeWaived: false,
    universalCashbackPercent: 2,
    url: "https://www.usbank.com/credit-cards/altitude-connect-visa-signature-credit-card.html",
    imageUrl: "/images/usbank/altitude-connect.png",
    credits: [],
    offers: [
      {
        amount: [{ amount: 50_000 }],
        spend: 2000,
        days: 120,
        credits: [],
        url: "https://www.usbank.com/credit-cards/altitude-connect-visa-signature-credit-card.html",
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 50_000 }],
        spend: 2000,
        days: 120,
        credits: [],
      },
    ],
  },
  {
    name: "Altitude Go",
    issuer: schemas.IssuersEnum.enum.US_BANK,
    network: schemas.NetworksEnum.enum.VISA,
    currency: schemas.CurrenciesEnum.enum.USD,
    isBusiness: false,
    annualFee: 0,
    isAnnualFeeWaived: false,
    details: "Points cannot be transferred, so are valued at 1cpp.",
    universalCashbackPercent: 2,
    url: "https://www.usbank.com/credit-cards/altitude-go-visa-signature-credit-card.html",
    imageUrl: "/images/usbank/altitude-go.jpg",
    credits: [],
    offers: [
      {
        amount: [{ amount: 200 }],
        spend: 1000,
        days: 90,
        credits: [],
        url: "https://www.usbank.com/credit-cards/altitude-go-visa-signature-credit-card.html",
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 250 }],
        spend: 1000,
        days: 120,
        credits: [],
      },
    ],
  },
  {
    name: "Altitude Reserve",
    issuer: schemas.IssuersEnum.enum.US_BANK,
    network: schemas.NetworksEnum.enum.VISA,
    currency: schemas.CurrenciesEnum.enum.US_BANK,
    isBusiness: false,
    annualFee: 400,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 2,
    url: "https://www.usbank.com/credit-cards/altitude-reserve-visa-infinite-credit-card.html",
    imageUrl: "/images/usbank/altitude-reserve.png",
    credits: [
      {
        value: 325,
        description: "$325 Travel + Dining credits",
        weight: 0.75,
      },
    ],
    offers: [
      {
        amount: [{ amount: 50_000 }],
        spend: 4500,
        days: 90,
        credits: [],
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 50_000 }],
        spend: 4500,
        days: 120,
        credits: [],
      },
    ],
  },
  {
    name: "Cash+",
    issuer: schemas.IssuersEnum.enum.US_BANK,
    network: schemas.NetworksEnum.enum.VISA,
    currency: schemas.CurrenciesEnum.enum.USD,
    isBusiness: false,
    annualFee: 0,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 2,
    url: "https://www.usbank.com/credit-cards/cash-plus-visa-signature-credit-card.html",
    imageUrl: "/images/usbank/cash-plus.jpg",
    credits: [],
    offers: [
      {
        amount: [{ amount: 200 }],
        spend: 1000,
        days: 120,
        credits: [],
        url: "https://www.usbank.com/credit-cards/cash-plus-visa-signature-credit-card.html",
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 200 }],
        spend: 1000,
        credits: [],
        days: 120,
      },
    ],
  },
  {
    name: "FlexPerks Gold",
    issuer: schemas.IssuersEnum.enum.US_BANK,
    network: schemas.NetworksEnum.enum.AMERICAN_EXPRESS,
    currency: schemas.CurrenciesEnum.enum.US_BANK,
    isBusiness: false,
    annualFee: 85,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 2,
    url: "https://www.usbank.com/credit-cards/flexperks-gold-american-express-credit-card.html",
    imageUrl: "/images/usbank/flexperks-gold.jpg",
    credits: [],
    offers: [],
    historicalOffers: [
      {
        amount: [{ amount: 30_000 }],
        spend: 2000,
        days: 120,
        credits: [],
      },
    ],
  },
  {
    name: "Business Leverage",
    issuer: schemas.IssuersEnum.enum.US_BANK,
    network: schemas.NetworksEnum.enum.VISA,
    currency: schemas.CurrenciesEnum.enum.USD,
    isBusiness: true,
    annualFee: 95,
    isAnnualFeeWaived: true,
    universalCashbackPercent: 1,
    url: "https://www.usbank.com/business-banking/business-credit-cards/benefits/leverage-visa-card-benefits.html",
    imageUrl: "/images/usbank/business-leverage.webp",
    credits: [],
    offers: [],
    historicalOffers: [
      {
        amount: [{ amount: 750 }],
        spend: 7500,
        credits: [],
        days: 120,
      },
    ],
  },
  {
    name: "Business Triple Cash Rewards",
    issuer: schemas.IssuersEnum.enum.US_BANK,
    network: schemas.NetworksEnum.enum.MASTERCARD,
    currency: schemas.CurrenciesEnum.enum.USD,
    isBusiness: true,
    annualFee: 95,
    isAnnualFeeWaived: true,
    universalCashbackPercent: 1,
    url: "https://bizcards.usbank.com/credit/business-triple-cash-back-credit-card.do",
    imageUrl: "/images/usbank/business-triple-cash-rewards.webp",
    credits: [],
    offers: [
      {
        amount: [{ amount: 500 }],
        spend: 4500,
        days: 150,
        credits: [],
        url: "https://bizcards.usbank.com/credit/business-triple-cash-back-credit-card.do",
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 500 }],
        spend: 4500,
        days: 150,
        credits: [],
      },
    ],
  },
  {
    name: "Skypass Blue",
    issuer: schemas.IssuersEnum.enum.US_BANK,
    network: schemas.NetworksEnum.enum.VISA,
    currency: schemas.CurrenciesEnum.enum.KOREAN,
    isBusiness: false,
    annualFee: 95,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 1,
    url: "https://www.skypassvisa.com/credit/visaSkyBlueCard.do",
    imageUrl: "/images/usbank/skypass.png",
    credits: [],
    offers: [
      {
        amount: [{ amount: 10_000 }],
        spend: 1000,
        days: 90,
        credits: [],
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 10_000 }],
        spend: 1000,
        days: 90,
        credits: [],
      },
    ],
  },
  {
    name: "Skypass",
    issuer: schemas.IssuersEnum.enum.US_BANK,
    network: schemas.NetworksEnum.enum.VISA,
    currency: schemas.CurrenciesEnum.enum.KOREAN,
    isBusiness: false,
    annualFee: 95,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 1,
    url: "https://www.skypassvisa.com/credit/visaSignatureCard.do",
    imageUrl: "/images/usbank/skypass.png",
    credits: [
      {
        value: 50,
        description: "$50 Korean Air credit",
        weight: 0.8,
      },
    ],
    offers: [
      {
        amount: [{ amount: 40_000 }],
        spend: 4000,
        days: 90,
        credits: [],
        url: "https://www.skypassvisa.com/credit/visaSignatureCard.do",
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 50_000 }],
        spend: 10_000,
        days: 90,
        expiration: "2022-07-01",
        credits: [],
      },
      {
        amount: [{ amount: 30_000 }],
        spend: 3000,
        days: 90,
        credits: [],
      },
      {
        amount: [{ amount: 40_000 }],
        spend: 4000,
        days: 90,
        credits: [],
        url: "https://www.skypassvisa.com/credit/visaSignatureCard.do",
      },
    ],
  },
  {
    name: "Skypass Select",
    issuer: schemas.IssuersEnum.enum.US_BANK,
    network: schemas.NetworksEnum.enum.VISA,
    currency: schemas.CurrenciesEnum.enum.KOREAN,
    isBusiness: false,
    annualFee: 450,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 1,
    url: "https://www.skypassvisa.com/credit/visaSelectCard.do",
    imageUrl: "/images/usbank/skypass-select.png",
    credits: [
      {
        value: 200,
        description: "$200 travel credit",
        weight: 0.8,
      },
      {
        value: 50,
        description: "Korean Air credit",
        weight: 0.8,
      },
      {
        value: 100,
        description: "TSA PreCheck or Global Entry fee credit",
        weight: WEIGHTS.PRECHECK,
      },
    ],
    offers: [
      {
        amount: [{ amount: 70_000 }],
        spend: 5000,
        days: 90,
        credits: [],
        url: "https://www.skypassvisa.com/credit/visaSelectCard.do",
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 70_000 }],
        spend: 5000,
        days: 90,
        credits: [],
        url: "https://www.skypassvisa.com/credit/visaSelectCard.do",
      },
    ],
  },
  {
    name: "Skypass Business",
    issuer: schemas.IssuersEnum.enum.US_BANK,
    network: schemas.NetworksEnum.enum.VISA,
    currency: schemas.CurrenciesEnum.enum.KOREAN,
    isBusiness: true,
    annualFee: 99,
    isAnnualFeeWaived: false,
    universalCashbackPercent: 1,
    url: "https://www.skypassvisa.com/credit/visaBusinessCard.do",
    imageUrl: "/images/usbank/skypass-business.png",
    credits: [
      {
        value: 50,
        description: "Korean Air credit",
        weight: 0.8,
      },
      {
        value: 100,
        description: "TSA PreCheck or Global Entry fee credit",
        weight: WEIGHTS.PRECHECK,
      },
    ],
    offers: [
      {
        amount: [{ amount: 50_000 }],
        spend: 5000,
        days: 90,
        credits: [],
        url: "https://www.skypassvisa.com/credit/visaBusinessCard.do",
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 30_000 }],
        spend: 3000,
        days: 90,
        credits: [],
      },
      {
        amount: [{ amount: 50_000 }],
        spend: 10_000,
        days: 90,
        expiration: "2022-07-01",
        credits: [],
      },
    ],
  },
  {
    name: "Shopper Cash Rewards",
    issuer: schemas.IssuersEnum.enum.US_BANK,
    network: schemas.NetworksEnum.enum.VISA,
    currency: schemas.CurrenciesEnum.enum.USD,
    isBusiness: false,
    annualFee: 95,
    isAnnualFeeWaived: true,
    universalCashbackPercent: 1.5,
    url: "https://www.usbank.com/credit-cards/shopper-cash-rewards-visa-signature-credit-card.html",
    imageUrl: "/images/usbank/shopper-cash-rewards.webp",
    credits: [],
    offers: [
      {
        amount: [{ amount: 250 }],
        spend: 2000,
        days: 120,
        credits: [],
        url: "https://www.usbank.com/credit-cards/shopper-cash-rewards-visa-signature-credit-card.html",
      },
    ],
    historicalOffers: [
      {
        amount: [{ amount: 250 }],
        spend: 2000,
        days: 120,
        credits: [],
      },
    ],
  },
];
