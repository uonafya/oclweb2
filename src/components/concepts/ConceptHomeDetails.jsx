import React from 'react';
import { get } from 'lodash';
import HomeMappings from './HomeMappings';
import ConceptCollections from './ConceptCollections';
import CustomAttributesAccordian from '../common/CustomAttributesAccordian';
import HomeLocales from './HomeLocales';
import VersionList from '../common/VersionList';

const ACCORDIAN_HEADING_STYLES = {
  fontWeight: 'bold',
}
const ACCORDIAN_DETAILS_STYLES = {
  maxHeight: '300px', overflow: 'auto', display: 'inline-block', width: '100%', padding: '0'
}

const ConceptHomeDetails = ({ concept, isLoadingMappings, isLoadingCollections, source, childConcepts, parentConcepts, isLoadingChildren, isLoadingParents, singleColumn, versions }) => {
  const names = get(concept, 'names', [])
  const descriptions = get(concept, 'descriptions', [])
  let classes = 'col-sm-12 padding-5';
  if(!singleColumn)
    classes += ' col-md-6'
  return (
    <div className='row' style={{width: '100%', margin: 0}}>
      <div className={classes}>
        <HomeLocales
          concept={concept}
          locales={names}
          source={source}
          label='Names & Synonyms'
        />
        <HomeLocales
          concept={concept}
          locales={descriptions}
          source={source}
          label='Descriptions'
          isDescription
        />
        <CustomAttributesAccordian
          attributes={concept.extras || {}}
          headingStyles={ACCORDIAN_HEADING_STYLES}
          detailStyles={ACCORDIAN_DETAILS_STYLES}
        />
      </div>
      <div className={classes}>
        <HomeMappings concept={concept} isLoadingMappings={isLoadingMappings} childConcepts={childConcepts} parentConcepts={parentConcepts} isLoadingChildren={isLoadingChildren} isLoadingParents={isLoadingParents} source={source} />
        <VersionList versions={versions} resource='concept' />
        <ConceptCollections concept={concept} isLoadingCollections={isLoadingCollections} />
      </div>
    </div>
  );
}

export default ConceptHomeDetails;
