import React from 'react';
import MappingCollections from '../common/SourceChildCollections';
import CustomAttributesAccordian from '../common/CustomAttributesAccordian';
import VersionList from '../common/VersionList';

const ACCORDIAN_HEADING_STYLES = {
  fontWeight: 'bold',
}
const ACCORDIAN_DETAILS_STYLES = {
  maxHeight: '300px', overflow: 'auto', display: 'inline-block', width: '100%', padding: '0'
}

const MappingHomeDetails = ({ mapping, singleColumn, versions, isLoadingCollections }) => {
  let classes = 'col-sm-12 padding-5';
  if(!singleColumn)
    classes += ' col-md-6'
  return (
    <div className='row' style={{width: '100%', margin: 0}}>
      <div className={classes}>
        <CustomAttributesAccordian
          attributes={mapping.extras || {}}
          headingStyles={ACCORDIAN_HEADING_STYLES}
          detailStyles={ACCORDIAN_DETAILS_STYLES}
        />
        <MappingCollections instance={mapping} isLoadingCollections={isLoadingCollections} />
      </div>
      <div className={classes}>
        <VersionList versions={versions} resource='mapping' />
      </div>
    </div>
  );
}

export default MappingHomeDetails;
