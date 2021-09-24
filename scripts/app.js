/* Set Global Variable */
let agentsList = [];

const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const btn4 = document.getElementById('btn4');
let para1 = document.getElementById('demo1');
const agentName = document.getElementById('agentName');
const agentFullName = agentName.value.split(' ');

btn1.onclick = addAgent;

btn2.onclick = createXML;

btn4.onclick = clear;

/* Reset the agents list array */
function clear(){
    agentsList = [];
}
/* Generate XML file */
function createXML(){
    let xmlRSS = `<?xml version="1.0" encoding="UTF-8" ?>
    <rss version="2.0"
        xmlns:excerpt="http://wordpress.org/export/1.2/excerpt/"
        xmlns:content="http://purl.org/rss/1.0/modules/content/"
        xmlns:wfw="http://wellformedweb.org/CommentAPI/"
        xmlns:dc="http://purl.org/dc/elements/1.1/"
        xmlns:wp="http://wordpress.org/export/1.2/"
    >
    
    <channel>
        <title>deasy penner podley</title>
        <link>https://dppre.wpengine.com</link>
        <description>home as art ®</description>
        <pubDate>Thu, 23 Sep 2021 18:52:03 +0000</pubDate>
        <language>en-US</language>
        <wp:wxr_version>1.2</wp:wxr_version>
        <wp:base_site_url>https://dppre.wpengine.com/</wp:base_site_url>
        <wp:base_blog_url>https://dppre.wpengine.com</wp:base_blog_url>
        <generator>https://wordpress.org/?v=5.7.2</generator>
        ${agentsList.join('')}	
    </channel>
    </rss>`;
    download('member-profiles.xml', xmlRSS);
}

/* Function to download the generated XML file */
function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
  
    element.style.display = 'none';
    document.body.appendChild(element);
  
    element.click();
  
    document.body.removeChild(element);
}



/* Add agent to the agent list array */
function addAgent(){
    let agent = {
        agentNameObj: '',
        agentRawData: '',
    };
    agent.agentNameObj = agentName.value;
    agent.agentRawData = `<item>
    <title><![CDATA[${agentName.value}]]></title>
    <pubDate>Mon, 19 Jul 2021 20:05:07 +0000</pubDate>
    <dc:creator><![CDATA[zachary.truong]]></dc:creator>
    <description></description>
    <content:encoded><![CDATA[<!-- wp:acf/block-callout-block {
    "id": "block_60f5d927f4768",
    "name": "acf\/block-callout-block",
    "data": {
    "header": "${agentName.value}",
    "_header": "field_5e0f4a7e86613",
    "sub": "Vice President | Founding Partner | Director of Operations",
    "_sub": "field_5e0f4bdbad92a",
    "text_align": "center",
    "_text_align": "field_5e8f74b3303f0",
    "overlay_style": "full",
    "_overlay_style": "field_5fea3f62e4059",
    "block_size": "partial",
    "_block_size": "field_5e0f4cc5ad931",
    "block_type": "image",
    "_block_type": "field_5e0f4be4ad92b",
    "image": 132,
    "_image": "field_5e0f4c25ad92c",
    "has_modal": "1",
    "_has_modal": "field_5e0f4cadad92f",
    "select_modal_form": "2",
    "_select_modal_form": "field_5e18be809a1c7",
    "button_text": "Contact Me",
    "_button_text": "field_5ed12da12cc77",
    "button_style": "stroke-white",
    "_button_style": "field_5e187d707743f",
    "form_title": "1",
    "_form_title": "field_5f1214d9bfa9a",
    "form_title_text": "Contact ${agentFullName[0]}",
    "_form_title_text": "field_5f10a2455ff55",
    "form_subtitle": "0",
    "_form_subtitle": "field_5f12152abfa9b",
    "member": 404,
    "_member": "field_5f10a6c9c288d",
    "confirmation_behaviour": "Default Confirmation Message",
    "_confirmation_behaviour": "field_5f12157bbfa9c"
    },
    "align": "",
    "mode": "edit"
    } /-->

    <!-- wp:acf/block-team-member-block {
    "id": "block_60f5d927f4769",
    "name": "acf\/block-team-member-block",
    "align": "",
    "mode": "preview"
    } /-->

    <!-- wp:acf/block-section-head {
    "id": "block_60f5d927f476d",
    "name": "acf\/block-section-head",
    "data": {
    "section_title": "My Listings",
    "_section_title": "field_5dec10001f528",
    "title_heading_size": "large",
    "_title_heading_size": "field_610a4774d17b5",
    "show_colored_line": "1",
    "_show_colored_line": "field_5e6006f36dddf",
    "section_subtitle": "",
    "_section_subtitle": "field_5dec10081f529"
    },
    "align": "",
    "mode": "edit"
    } /-->

    <!-- wp:acf/block-home-junction-block {
    "id": "block_60f5d927f476e",
    "name": "acf\/block-home-junction-block",
    "data": {
    "shortcode": "[listings market=\"crmls\" agentId=\"CLW-x70481\" listingType=\"residential\" sortfield=\"daysOnHJI\" sortorder=\"asc\" pageSize=\"16\" grid_size=\"0\" map=\"0\" pagination=\"1\"]",
    "_shortcode": "field_5ebe3e373e5d6"
    },
    "align": "",
    "mode": "edit"
    } /-->

    <!-- wp:acf/block-section-head {
    "id": "block_61395a911bf03",
    "name": "acf\/block-section-head",
    "data": {
    "section_title": "Past Sales",
    "_section_title": "field_5dec10001f528",
    "title_heading_size": "large",
    "_title_heading_size": "field_610a4774d17b5",
    "show_colored_line": "1",
    "_show_colored_line": "field_5e6006f36dddf",
    "section_subtitle": "",
    "_section_subtitle": "field_5dec10081f529"
    },
    "align": "",
    "mode": "edit"
    } /-->

    <!-- wp:acf/block-home-junction-block {
    "id": "block_61395a9c1bf04",
    "name": "acf\/block-home-junction-block",
    "data": {
    "shortcode": "<div data-pm-slice=\"1 1 []\" data-en-clipboard=\"true\">[past_sales market=\"crmls\" agentId=\"CLW-X70481\" sortfield=\"offMarketDate\" sortorder=\"desc\" pageSize=\"8\" grid_size=\"4\" map=\"0\" pagination=\"1\"]<\/div>",
    "_shortcode": "field_5ebe3e373e5d6"
    },
    "align": "",
    "mode": "edit"
    } /-->

    <!-- wp:acf/block-stat-block {
    "id": "block_60f5d927f476a",
    "name": "acf\/block-stat-block",
    "data": {
    "has_title": "1",
    "_has_title": "field_5e18937f3e93a",
    "section_title": "Highlights",
    "_section_title": "field_5e1893923e93b",
    "text_alignment": "center",
    "_text_alignment": "field_5e1893ba3e93c",
    "items_0_text": "Avg. Yelp Rating",
    "_items_0_text": "field_5dc55d916245e",
    "items_0_number": "4.8",
    "_items_0_number": "field_5dc55d966245f",
    "items_1_text": "2020 Transactions",
    "_items_1_text": "field_5dc55d916245e",
    "items_1_number": "26",
    "_items_1_number": "field_5dc55d966245f",
    "items_2_text": "Career Sales",
    "_items_2_text": "field_5dc55d916245e",
    "items_2_number": "$500 + Million",
    "_items_2_number": "field_5dc55d966245f",
    "items": 3,
    "_items": "field_5dc55d6c6245c"
    },
    "align": "",
    "mode": "edit"
    } /-->

    <!-- wp:acf/block-testimonials-large {
    "id": "block_60f5d927f476b",
    "name": "acf\/block-testimonials-large",
    "data": {
    "items": [
        "75",
        "407",
        "408"
    ],
    "_items": "field_5dd46222099ce"
    },
    "align": "",
    "mode": "edit"
    } /-->

    <!-- wp:acf/block-cards {
    "id": "block_60f5d927f476c",
    "name": "acf\/block-cards",
    "data": {
    "title": "Achievements",
    "_title": "field_6030498934b30",
    "card_0_image": 410,
    "_card_0_image": "field_60304a3034b32",
    "card_0_image_size": "fit",
    "_card_0_image_size": "field_6035a3e032cc5",
    "card_0_link_to": "homelight.com",
    "_card_0_link_to": "field_60304a5834b33",
    "card_0_title": "Ranked in the top 5% of agents based on total sales volume",
    "_card_0_title": "field_60304a7334b34",
    "card_1_image": 411,
    "_card_1_image": "field_60304a3034b32",
    "card_1_image_size": "fit",
    "_card_1_image_size": "field_6035a3e032cc5",
    "card_1_link_to": "realtrends.com",
    "_card_1_link_to": "field_60304a5834b33",
    "card_1_title": "Ranked in the top 1000 agents in the country based on total sales volume",
    "_card_1_title": "field_60304a7334b34",
    "card_2_image": 412,
    "_card_2_image": "field_60304a3034b32",
    "card_2_image_size": "fit",
    "_card_2_image_size": "field_6035a3e032cc5",
    "card_2_link_to": "aspca.com",
    "_card_2_link_to": "field_60304a5834b33",
    "card_2_title": "Proud donator to the ASPCA, 200k + donated",
    "_card_2_title": "field_60304a7334b34",
    "card": 3,
    "_card": "field_603049a234b31"
    },
    "align": "",
    "mode": "edit"
    } /-->

    <!-- wp:block {"ref":871} /-->

    <!-- wp:block {"ref":873} /-->

    <!-- wp:acf/block-callout-block {
    "id": "block_60f5d927f4770",
    "name": "acf\/block-callout-block",
    "data": {
    "header": "Let's Connect",
    "_header": "field_5e0f4a7e86613",
    "sub": "You've got questions and we can't wait to answer them.",
    "_sub": "field_5e0f4bdbad92a",
    "text_align": "center",
    "_text_align": "field_5e8f74b3303f0",
    "overlay_style": "full",
    "_overlay_style": "field_5fea3f62e4059",
    "block_size": "default",
    "_block_size": "field_5e0f4cc5ad931",
    "block_type": "image",
    "_block_type": "field_5e0f4be4ad92b",
    "image": 793,
    "_image": "field_5e0f4c25ad92c",
    "has_modal": "1",
    "_has_modal": "field_5e0f4cadad92f",
    "select_modal_form": "2",
    "_select_modal_form": "field_5e18be809a1c7",
    "button_text": "Contact Me",
    "_button_text": "field_5ed12da12cc77",
    "button_style": "stroke-white",
    "_button_style": "field_5e187d707743f",
    "form_title": "1",
    "_form_title": "field_5f1214d9bfa9a",
    "form_title_text": "Contact ${agentFullName[0]}",
    "_form_title_text": "field_5f10a2455ff55",
    "form_subtitle": "0",
    "_form_subtitle": "field_5f12152abfa9b",
    "member": 404,
    "_member": "field_5f10a6c9c288d",
    "confirmation_behaviour": "Default Confirmation Message",
    "_confirmation_behaviour": "field_5f12157bbfa9c"
    },
    "align": "",
    "mode": "edit"
    } /-->]]></content:encoded>
    <excerpt:encoded><![CDATA[]]></excerpt:encoded>
    <wp:post_date><![CDATA[2021-07-19 20:05:07]]></wp:post_date>
    <wp:post_date_gmt><![CDATA[2021-07-19 20:05:07]]></wp:post_date_gmt>
    <wp:post_modified><![CDATA[2021-09-21 19:51:23]]></wp:post_modified>
    <wp:post_modified_gmt><![CDATA[2021-09-21 19:51:23]]></wp:post_modified_gmt>
    <wp:comment_status><![CDATA[closed]]></wp:comment_status>
    <wp:ping_status><![CDATA[closed]]></wp:ping_status>
    <wp:status><![CDATA[draft]]></wp:status>
    <wp:post_parent>0</wp:post_parent>
    <wp:menu_order>0</wp:menu_order>
    <wp:post_type><![CDATA[member-profile]]></wp:post_type>
    <wp:post_password><![CDATA[]]></wp:post_password>
    <wp:is_sticky>0</wp:is_sticky>
                                                    <wp:postmeta>
    <wp:meta_key><![CDATA[_edit_last]]></wp:meta_key>
    <wp:meta_value><![CDATA[4]]></wp:meta_value>
    </wp:postmeta>
                        <wp:postmeta>
    <wp:meta_key><![CDATA[member]]></wp:meta_key>
    <wp:meta_value><![CDATA[404]]></wp:meta_value>
    </wp:postmeta>
                        <wp:postmeta>
    <wp:meta_key><![CDATA[_member]]></wp:meta_key>
    <wp:meta_value><![CDATA[field_602eb38401286]]></wp:meta_value>
    </wp:postmeta>
    </item>`;
    agentName.value = '';
    return agentsList.push(agent);
    
}


