import wts_icon from './wts_icon.png'
import wtt_icon from './wtt_icon.png'
import wtb_icon from './wtb_icon.png'
import go_icon from './go_icon.png'

import insta_post_img_01 from './insta_post_img_01.jpg'
import insta_post_img_02 from './insta_post_img_02.jpg'
import insta_post_img_03 from './insta_post_img_03.jpg'
import insta_post_img_04 from './insta_post_img_04.jpg'
import insta_post_img_05 from './insta_post_img_05.jpg'
import insta_post_img_06 from './insta_post_img_06.jpg'
import insta_post_img_07 from './insta_post_img_07.jpg'
import insta_post_img_08 from './insta_post_img_08.jpg'
import insta_post_img_09 from './insta_post_img_09.jpg'

import facebook_icon from './facebook.png'
import instagram_icon from './instagram.png'
import linkedin_icon from './linkedin.png'
import twitter_icon from './twitter.png'

import bookmark_after from './bookmark_after.png'
import bookmark_before from './bookmark_before.png'
import header_img from './header_img.png'
import logo from './logo.png'
import arrow_top from './arrow-top.png'

export const assets = {
    bookmark_after,
    bookmark_before,
    header_img,
    logo,
    facebook_icon,
    instagram_icon,
    linkedin_icon,
    twitter_icon,
    arrow_top
}

export const transaction_option = [
    {
        transaction_name: "WTS",
        transaction_image: wts_icon 
    },
    {
        transaction_name: "WTT",
        transaction_image: wtt_icon
    },
    {
        transaction_name: "WTB",
        transaction_image: wtb_icon
    },
    {
        transaction_name: "GO",
        transaction_image: go_icon
    }
]

export const posts_list = [
    {
        _id: "1",
        insta_url: "https://www.instagram.com/p/C3RmsqnuIa3/?igsh=aHlxeDFlNW0yZDZw",
        post_image: insta_post_img_01,
        transaction_type: "WTS",
        kpop_group: ["Seventeen", "Twice"],
        description: "Example of note, have: XYZ, want to sell for $3 each",
    },
    {
        _id: "2",
        insta_url: "https://www.instagram.com/p/C3RmsqnuIa3/?igsh=aHlxeDFlNW0yZDZw",
        post_image: insta_post_img_02,
        transaction_type: "GO",
        kpop_group: ["Seventeen"],
        description: "Example of note, have: XYZ, want to sell for $3 each",
    },
    {
        _id: "3",
        insta_url: "https://www.instagram.com/p/C3RmsqnuIa3/?igsh=aHlxeDFlNW0yZDZw",
        post_image: insta_post_img_03,
        transaction_type: "WTS",
        kpop_group: ["Twice"],
        description: "Example of note, have: XYZ, want to sell for $3 each",
    },
    {
        _id: "4",
        insta_url: "https://www.instagram.com/p/C3RmsqnuIa3/?igsh=aHlxeDFlNW0yZDZw",
        post_image: insta_post_img_04,
        transaction_type: "WTT",
        kpop_group: ["Seventeen"],
        description: "Example of note, have: XYZ, want to sell for $3 each",
    },
    {
        _id: "5",
        insta_url: "https://www.instagram.com/p/C3RmsqnuIa3/?igsh=aHlxeDFlNW0yZDZw",
        post_image: insta_post_img_05,
        transaction_type: "WTT",
        kpop_group: ["Seventeen"],
        description: "Example of note, have: XYZ, want to sell for $3 each",
    },
    {
        _id: "6",
        insta_url: "https://www.instagram.com/p/C3RmsqnuIa3/?igsh=aHlxeDFlNW0yZDZw",
        post_image: insta_post_img_06,
        transaction_type: "WTS",
        kpop_group: ["Seventeen"],
        description: "Example of note, have: XYZ, want to sell for $3 each",
    },
    {
        _id: "7",
        insta_url: "https://www.instagram.com/p/C3RmsqnuIa3/?igsh=aHlxeDFlNW0yZDZw",
        post_image: insta_post_img_07,
        transaction_type: "WTB",
        kpop_group: ["Ive", "Twice"],
        description: "Example of note, have: XYZ, want to sell for $3 each",
    },
    {
        _id: "8",
        insta_url: "https://www.instagram.com/p/C3RmsqnuIa3/?igsh=aHlxeDFlNW0yZDZw",
        post_image: insta_post_img_08,
        transaction_type: "WTS",
        kpop_group: ["Seventeen", "Ive"],
        description: "Example of note, have: XYZ, want to sell for $3 each",
    },
    {
        _id: "9",
        insta_url: "https://www.instagram.com/p/C3RmsqnuIa3/?igsh=aHlxeDFlNW0yZDZw",
        post_image: insta_post_img_09,
        transaction_type: "WTS",
        kpop_group: ["Twice"],
        description: "Example of note, have: XYZ, want to sell for $3 each",
    }
]

export const scammer_post_list = [
    {
        _id: "1",
        insta_url: "https://www.instagram.com/p/Bps7v0TgUiK/?utm_medium=copy_link",
        username: "hihighsales",
        date_of_post: "11/2/2018",
        user_type: "seller",
        platform_transaction: "instagram",
        scammer_type: "Potential Scammer",
        kpop_group: ["Seventeen", "BTS"],
        payment_info :"test123@gmail.com"
    },
    {
        _id: "2",
        insta_url: "https://www.instagram.com/p/Bps7v0TgUiK/?utm_medium=copy_link",
        username: "teampoger",
        date_of_post: "11/2/2018",
        user_type: "gom",
        platform_transaction: "instagram",
        scammer_type: "Potential Scammer",
        kpop_group: ["NCT", "BTS"],
        payment_info :"test123@gmail.com"
    },
    {
        _id: "3",
        insta_url: "https://www.instagram.com/p/Bps7v0TgUiK/?utm_medium=copy_link",
        username: "teampoger",
        date_of_post: "11/2/2018",
        user_type: "seller",
        platform_transaction: "instagram",
        scammer_type: "Bad Experience",
        kpop_group: ["NCT", "BTS"],
        payment_info :"test123@gmail.com"
    },
    {
        _id: "4",
        insta_url: "https://www.instagram.com/p/Bps7v0TgUiK/?utm_medium=copy_link",
        username: "hihighsales",
        date_of_post: "11/2/2018",
        user_type: "seller",
        platform_transaction: "instagram",
        scammer_type: "Bad Experience",
        kpop_group: ["Seventeen", "BTS"],
        payment_info :"test123@gmail.com"
    },
    {
        _id: "5",
        insta_url: "https://www.instagram.com/p/Bps7v0TgUiK/?utm_medium=copy_link",
        username: "hihighsales",
        date_of_post: "11/2/2018",
        user_type: "trader",
        platform_transaction: "instagram",
        scammer_type: "Potential Scammer",
        kpop_group: ["Seventeen", "Twice"],
        payment_info :"test123@gmail.com"
    },
    {
        _id: "6",
        insta_url: "https://www.instagram.com/p/Bps7v0TgUiK/?utm_medium=copy_link",
        username: "bxby_sssnoopy",
        date_of_post: "11/2/2018",
        user_type: "trader",
        platform_transaction: "twitter",
        scammer_type: "Potential Scammer",
        kpop_group: ["Seventeen", "Twice"],
        payment_info :"abc123@gmail.com"
    },
    {
        _id: "7",
        insta_url: "https://www.instagram.com/p/Bps7v0TgUiK/?utm_medium=copy_link",
        username: "bxby_snoopy",
        date_of_post: "11/2/2018",
        user_type: "trader",
        platform_transaction: "twitter",
        scammer_type: "Potential Scammer",
        kpop_group: ["Seventeen", "Twice"],
        payment_info :"abc1234@gmail.com"
    },
    {
        _id: "8",
        insta_url: "https://www.instagram.com/p/Bps7v0TgUiK/?utm_medium=copy_link",
        username: "bxby_snoopy",
        date_of_post: "11/2/2018",
        user_type: "seller",
        platform_transaction: "twitter",
        scammer_type: "Potential Scammer",
        kpop_group: ["EXO", "Twice"],
        payment_info :"abc123@gmail.com"
    },
    {
        _id: "9",
        insta_url: "https://www.instagram.com/p/Bps7v0TgUiK/?utm_medium=copy_link",
        username: "hihighsales",
        date_of_post: "11/2/2018",
        user_type: "seller",
        platform_transaction: "instagram",
        scammer_type: "Potential Scammer",
        kpop_group: ["EXO", "Twice"],
        payment_info :"test123@gmail.com"
    },
    {
        _id: "10",
        insta_url: "https://www.instagram.com/p/Bps7v0TgUiK/?utm_medium=copy_link",
        username: "hihighsales",
        date_of_post: "11/2/2018",
        user_type: "seller",
        platform_transaction: "instagram",
        scammer_type: "Potential Scammer",
        kpop_group: ["Seventeen", "IVE"],
        payment_info :"ttest123@gmail.com"
    },
    {
        _id: "11",
        insta_url: "https://www.instagram.com/p/Bps7v0TgUiK/?utm_medium=copy_link",
        username: "ggukop",
        date_of_post: "11/2/2018",
        user_type: "seller",
        platform_transaction: "ebay",
        scammer_type: "Potential Scammer",
        kpop_group: ["Straykids", "Ateez"],
        payment_info :"ttest123@gmail.com"
    },
    {
        _id: "12",
        insta_url: "https://www.instagram.com/p/Bps7v0TgUiK/?utm_medium=copy_link",
        username: "ggukop",
        date_of_post: "11/2/2018",
        user_type: "buyer",
        platform_transaction: "instagram",
        scammer_type: "Selective Scammer",
        kpop_group: ["Straykids", "Ateez"],
        payment_info :"test123@gmail.com"
    },
    {
        _id: "13",
        insta_url: "https://www.instagram.com/p/Bps7v0TgUiK/?utm_medium=copy_link",
        username: "hihighsalesss",
        date_of_post: "11/2/2018",
        user_type: "seller",
        platform_transaction: "depop",
        scammer_type: "Selective Scammer",
        kpop_group: ["TXT"],
        payment_info :"test123@gmail.com"
    }
]