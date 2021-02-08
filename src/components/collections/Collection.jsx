import React from 'react';
import { Link } from 'react-router-dom'
import { Loyalty as LoyaltyIcon } from '@material-ui/icons'
import { merge, get } from 'lodash'
import { DARKGRAY } from '../../common/constants';
import ResourceLabel from '../common/ResourceLabel';
import LastUpdatedOnLabel from '../common/LastUpdatedOnLabel';

const Collection = props => {
  return (
    <div className='col-sm-12' style={merge({paddingTop: '10px', paddingLeft: 0, paddingRight: 0}, get(props, 'style', {}))}>
      <Link to={props.url} style={{display: 'inline-block'}} target="_blank">
        <ResourceLabel
          owner={props.owner} id={props.id} name={props.name}
          icon={<LoyaltyIcon fontSize='small' style={{width: '10pt', color: DARKGRAY}}/>}
          colorClass="collection-bg"
        />
      </Link>
      <div className='col-sm-12 no-side-padding resource-attributes'>
        <span className='resource-attr'>Collection Type:</span>
        <span className='resource-value'>{props.collection_type || 'None'}</span>
        {
          props.description &&
          <React.Fragment>
            <br/>
            <span className='resource-value'>{props.description}</span>
          </React.Fragment>
        }
      </div>
      <LastUpdatedOnLabel date={props.updated_on} />
    </div>
  )
}

export default Collection;
