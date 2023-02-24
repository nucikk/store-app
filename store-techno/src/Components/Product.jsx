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


export const productSectionOne = [
  {
   id: 1,
   photo: WatchPhoto,
   productName: 'Apple Watch',
   productModel: 'Series 5 SE',
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
  price: 619.99,
  addToCartIcon: AddToCartIcon,
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sagittis arcu nibh, at bibendum nisl facilisis eu. Etiam sodales tellus quis justo facilisis, vitae tincidunt nunc faucibus. Pellentesque viverra orci at aliquam pharetra. Donec sit amet imperdiet lacus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec quis est ut mauris euismod egestas. Integer sed libero lacus. Praesent maximus ex eget massa bibendum, a pharetra nulla convallis. In ut justo vel felis feugiat elementum.",
  storageCapacity:"",
  condition: "Brand new",
  series:""
},
];

export const productSectionSecond = [
 {
  id: 6,
  photo: Samsung21,
  productName: 'Samsung Galaxy S21+',
  productModel: 'Lilac Purple',
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
  price: 999.99,
  addToCartIcon: AddToCartIcon,
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sagittis arcu nibh, at bibendum nisl facilisis eu. Etiam sodales tellus quis justo facilisis, vitae tincidunt nunc faucibus. Pellentesque viverra orci at aliquam pharetra. Donec sit amet imperdiet lacus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec quis est ut mauris euismod egestas. Integer sed libero lacus. Praesent maximus ex eget massa bibendum, a pharetra nulla convallis. In ut justo vel felis feugiat elementum.",
  storageCapacity:"",
  condition: "Refurbished",
  series:""
},
{
  id: 10,
  photo: Iphone11black,
  productName: "Iphone 11",
  productModel: 'Serious Black',
  price: 696.99,
  addToCartIcon: AddToCartIcon,
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sagittis arcu nibh, at bibendum nisl facilisis eu. Etiam sodales tellus quis justo facilisis, vitae tincidunt nunc faucibus. Pellentesque viverra orci at aliquam pharetra. Donec sit amet imperdiet lacus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec quis est ut mauris euismod egestas. Integer sed libero lacus. Praesent maximus ex eget massa bibendum, a pharetra nulla convallis. In ut justo vel felis feugiat elementum.",
  storageCapacity:"",
  condition: "Used",
  series:""
}
]
