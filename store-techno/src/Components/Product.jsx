import AddToCartIcon from "../Photo/Button-add-shop.svg"
import WatchPhoto from "../Photo/Watch.svg";
import Headphones from "../Photo/Headphones.svg"
import Iphone13 from "../Photo/Iphone-13.svg"
import Iphone13Pro from "../Photo/iphone-13-Pro-02.svg"
import iPhone12SubwayBlue from '../Photo/Iphone-12.svg'
import iPhone11Red from "../Photo/Iphone-12red.svg"
import iPhone12White from "../Photo/Iphone-12-white.svg"
import Samsung21 from "../Photo/Samsung-S21.svg"
import samsungNote21 from "../Photo/Samsung-Note21.svg"
import Iphone11black from "../Photo/iphone-12-black-01.svg"
import Stars from "../Photo/Stars.svg"

export const productSectionOne = [
  {
    id: 1,
    photo: WatchPhoto,
    productName: 'Apple Watch',
    productModel: 'Series 5 SE',
    rating: Stars,
    price: 529.99,
    addToCartIcon: AddToCartIcon,
    description: "The Apple Watch SE has the same larger Retina display as Series 6, so you can see more at a glance. Advanced sensors to track all your fitness and workout goals, And powerful features to keep you healthy and safe. ",
    details: 'Apple Watch requires an iPhone 8 or later with iOS 16 or later. Wireless service plan required for cellular service. Apple Watch and iPhone service provider must be the same. Not all service providers support enterprise accounts; check with your employer and service provider. Roaming is not available outside your carrier network coverage area. Contact your service provider for more details. Check apple.com/watch/cellular for participating wireless carriers and eligibility.',
    storageCapacity: "32GB",
    condition: "Brand new",
    series: "Series 5"
  },
  {
    id: 2,
    photo: Headphones,
    productName: 'Sony ZX330BT',
    productModel: 'Light Grey',
    rating: Stars,
    price: 39.99,
    addToCartIcon: AddToCartIcon,
    description: "These wireless headphones feature Bluetooth connectivity, an adjustable headband, and up to 30 hours of battery life.",
    details: "Experience dynamic sound and deep bass with the 30mm driver units. The swivel design makes these headphones convenient to pack in your bag, and the built-in microphone allows for hands-free calling.",
    storageCapacity: "",
    condition: "",
    series: ""
  },
  {
    id: 3,
    photo: Iphone13,
    productName: 'iPhone 13',
    productModel: 'Navy Blue',
    rating: Stars,
    price: 729.99,
    addToCartIcon: AddToCartIcon,
    description: "The iPhone 13 features a 6.1-inch Super Retina XDR display, A15 Bionic chip, and a dual-camera system.",
    details: "The ceramic shield front cover provides superior durability and the phone is water-resistant up to 6 meters for up to 30 minutes. Face ID provides secure authentication and Apple Pay allows for easy payments.",
    storageCapacity: "128GB",
    condition: "Brand new",
    series: ""
  },
  {
    id: 4,
    photo: Iphone13Pro,
    productName: 'iPhone 13 Pro',
    productModel: 'Grey',
    rating: Stars,
    price: 819.99,
    addToCartIcon: AddToCartIcon,
    description: "The iPhone 13 Pro features a 6.1-inch Super Retina XDR display, A15 Bionic chip, and a triple-camera system with night mode.",
    details: "The ceramic shield front cover provides superior durability and the phone is water-resistant up to 6 meters for up to 30 minutes. Face ID provides secure authentication and Apple Pay allows for easy payments. The Pro camera system allows for stunning photos and video and the LiDAR scanner provides AR capabilities.",
    storageCapacity: "256GB",
    condition: "Brand new",
    series: ""
  },
  {
    id: 5,
    photo: iPhone12SubwayBlue,
    productName: 'iPhone 12',
    productModel: 'Subway Blue',
    rating: Stars,
    price: 619.99,
    addToCartIcon: AddToCartIcon,
    description: "The iPhone 12 in Subway Blue is a sleek and stylish device with a powerful A14 Bionic chip and 5G capabilities. It has a 6.1-inch Super Retina XDR display and a Ceramic Shield front cover for added durability.",
    details: "256GB storage, 4GB RAM, Dual 12MP Ultra Wide and Wide cameras with Night mode, TrueDepth camera with Face ID, Water and dust resistance (IP68), iOS 14",
    storageCapacity: "256GB",
    condition: "Brand new",
    series: "iPhone 12"
  },
];

export const productSectionSecond = [
  {
    id: 6,
    photo: Samsung21,
    productName: 'Samsung Galaxy S21+',
    productModel: 'Lilac Purple',
        rating: Stars,
    price: 849.99,
    addToCartIcon: AddToCartIcon,
    description: "Experience the ultimate in smartphone technology with the Samsung Galaxy S21+. Its 6.7-inch display, 5G connectivity, and powerful processor provide seamless performance for all your needs. Plus, with a stunning lilac purple finish, it's a device that's sure to turn heads.",
    details: "The Samsung Galaxy S21+ features a 6.7-inch Dynamic AMOLED 2X display, Exynos 2100/Snapdragon 888 processor, 8GB RAM, 128GB/256GB storage, triple 12MP+12MP+64MP rear camera system, 10MP front camera, 5G connectivity, and a 4800mAh battery with 25W fast charging.",
    storageCapacity: "128GB or 256GB",
    condition: "Brand new",
    series: "Galaxy S21 series"
  },

  {
    id: 7,
    photo: iPhone11Red,
    productName: 'iPhone 11 Red',
    productModel: 'Product RED',
    rating: Stars,
    price: 3249.99,
    addToCartIcon: AddToCartIcon,
    description: "Make a statement with the iPhone 11 Product RED. Its bold red finish is eye-catching and unique, and it's packed with advanced features to enhance your mobile experience.",
    details: "The iPhone 11 features a 6.1-inch Liquid Retina display, A13 Bionic chip, 4GB RAM, 64GB/128GB/256GB storage, dual 12MP+12MP rear camera system, 12MP front camera, Face ID, and a 3110mAh battery with 18W fast charging.",
    storageCapacity: "64GB, 128GB, or 256GB",
    condition: "Refurbished",
    series: "iPhone 11 series"
  },

  {
    id: 8,
    photo: iPhone12White,
    productName: 'iPhone 12 White',
    productModel: 'Milky White',
    rating: Stars,
    price: 619.99,
    addToCartIcon: AddToCartIcon,
    description: "The iPhone 12 in Milky White is a stunning device that offers powerful performance and sleek style. Its 6.1-inch display, 5G connectivity, and A14 Bionic chip make it a top choice for mobile enthusiasts.",
    details: "The iPhone 12 features a 6.1-inch Super Retina XDR display, A14 Bionic chip, 4GB RAM, 64GB/128GB/256GB storage, dual 12MP rear camera system, 12MP front camera, Face ID, and a 2815mAh battery with 20W fast charging.",
    storageCapacity: "64GB, 128GB, or 256GB",
    condition: "Brand new",
    series: "iPhone 12 series"
  },
  {
    id: 9,
    photo: samsungNote21,
    productName: "Samsung Galaxy Note",
    productModel: '2 - Options',
    rating: Stars,
    price: 999.99,
    addToCartIcon: AddToCartIcon,
    description: "The Samsung Galaxy Note is a powerful and versatile device with a large 6.7-inch Dynamic AMOLED 2X display and a powerful Snapdragon 865+ processor. It comes with an S Pen for precise control and creativity.",
    details: "256GB storage, 12GB RAM, Triple rear camera setup (12MP+12MP+12MP), 10MP front-facing camera, Water and dust resistant (IP68), 5G capable, Android 11",
    storageCapacity: "256GB",
    condition: "Refurbished",
    series: "Galaxy Note"
  },
  {
    id: 10,
    photo: Iphone11black,
    productName: "Iphone 11",
    productModel: 'Serious Black',
    rating: Stars,
    price: 696.99,
    addToCartIcon: AddToCartIcon,
    description: "The iPhone 11 in Serious Black is a reliable and high-performing device with a 6.1-inch Liquid Retina display and an A13 Bionic chip. It has a dual-camera system with Night mode and can shoot 4K video.",
    details: "128GB storage, 4GB RAM, Dual 12MP Ultra Wide and Wide cameras with Night mode, TrueDepth camera with Face ID, Water and dust resistance (IP68), iOS 13",
    storageCapacity: "128GB",
    condition: "Used",
    series: "iPhone 11"
  }
]
