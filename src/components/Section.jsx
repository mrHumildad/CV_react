import React from 'react';
import { translations } from '../trans';

const Parraf = ({ text, boldText }) => {
    const boldWords = Array.isArray(boldText) ? boldText : [boldText];
    // Build a regex to match any bold word, word boundaries for accuracy
    const regex = new RegExp(`(${boldWords.map(w => w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`, 'gi');
    const parts = text.split(regex);

    return (
        <span>
            {parts.map((part, i) =>
                boldWords.some(word => word.toLowerCase() === part.toLowerCase()) ? (
                    <span className="accent" key={i}>{part}</span>
                ) : (
                    <React.Fragment key={i}>{part}</React.Fragment>
                )
            )}
        </span>
    );
}

const Item = ({itemData, className}) => {
    const itemClass = className === 'section' ? '' : '-' + className;
    const titleClass = "item-title" + itemClass;
    const period = itemData?.period ? `(${itemData.period}) ` : '';

    const handleClick = (e) => {
        if (itemData?.link) {
            window.open(itemData.link, '_blank', 'noopener,noreferrer');
        }
    };

    return (
        <li
            className={`item${itemData?.link ? ' clickable' : ''}`}
            onClick={handleClick}
            style={itemData?.link ? { cursor: 'pointer' } : {}}
        >
            <span className={titleClass}>{itemData.title + ' '}</span>
            {period && <span className='period'>{period}</span>}
            <Parraf text={itemData.description} boldText={itemData.accent}/>
            {itemData?.link && (
                <span className='section-link print'>{itemData.link}</span>
            )}
        </li>
    );
}
const Section = ({lang, name, className='section'}) => {
    const sectionData = translations[lang][name] || [];
    const titleText = translations[lang].sections[name]
    const items = sectionData.map((itemData, i) => <Item key={i} itemData={itemData} className={className}/>)
    return (
        <div className={className} id={name}>
            <span className={`${className}-title`}>
              {titleText}
              {name=== 'projects' && <span className='no-print'>{ translations[lang].sections.click}</span>}
            </span>
            <div className='items-container'>
              {items}
            </div>
        </div>
    );
}


export default Section;