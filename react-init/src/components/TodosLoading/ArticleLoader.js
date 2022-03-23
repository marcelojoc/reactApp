import React from 'react'
import ContentLoader from 'react-content-loader'

const Article = props => (
  <ContentLoader viewBox="0 0 400 160" height={160} width={400} {...props}>
    <rect x="101" y="5" rx="3" ry="3" width="67" height="11" /> 
    <rect x="177" y="5" rx="3" ry="3" width="140" height="11" /> 
    <rect x="228" y="53" rx="3" ry="3" width="53" height="11" /> 
    <rect x="288" y="53" rx="3" ry="3" width="72" height="11" /> 
    <rect x="119" y="53" rx="3" ry="3" width="100" height="11" /> 
    <rect x="101" y="76" rx="3" ry="3" width="37" height="11" /> 
    <rect x="119" y="28" rx="3" ry="3" width="140" height="11" /> 
    <rect x="267" y="28" rx="3" ry="3" width="173" height="11" /> 
    <circle cx="44" cy="51" r="35" /> 
    <circle cx="52" cy="59" r="4" />
  </ContentLoader>
)

Article.metadata = {
  name: 'RoyalBhati',
  github: 'royalbhati',
  description: 'Simple Article',
  filename: 'Article',
}

export { Article}