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

import bookmark_after from './bookmark_after.png'
import bookmark_before from './bookmark_before.png'
import header_img from './header_img.png'
import logo from './logo.png'

export const assets = {
    bookmark_after,
    bookmark_before,
    header_img,
    logo
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
        kpop_group: ["Seventeen", "Twice", "Ive"],
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