/* ------------------------------------------------------------------------- *
 * Copyright 2002-2023, OpenNebula Project, OpenNebula Systems               *
 *                                                                           *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may   *
 * not use this file except in compliance with the License. You may obtain   *
 * a copy of the License at                                                  *
 *                                                                           *
 * http://www.apache.org/licenses/LICENSE-2.0                                *
 *                                                                           *
 * Unless required by applicable law or agreed to in writing, software       *
 * distributed under the License is distributed on an "AS IS" BASIS,         *
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.  *
 * See the License for the specific language governing permissions and       *
 * limitations under the License.                                            *
 * ------------------------------------------------------------------------- */

import PropTypes from 'prop-types'
import { Component } from 'react'
import { rowStyles } from 'client/components/Tables/styles'

import { translateACL } from 'client/models/ACL'

/**
 * ACLCardReadableRule component to display ACL details.
 *
 * @param {object} props - Component props
 * @param {object} props.acl - ACL details
 * @param {object} props.rootProps - Additional props for the root element
 * @returns {Component} UserCard component
 */
const ACLCardReadableRule = ({ acl, rootProps }) => {
  const { ID, STRING } = acl

  // Row styles
  const classes = rowStyles()

  return (
    <div {...rootProps} data-cy={`acl-${ID}`}>
      <div className={classes.main}>
        <div className={classes.title}>
          <span data-cy="acl-card-readable">{translateACL(STRING)}</span>
        </div>
        <div className={classes.caption}>
          <span data-cy="acl-card-id">{`#${ID}`}</span>
        </div>
      </div>
    </div>
  )
}

ACLCardReadableRule.propTypes = {
  acl: PropTypes.shape({
    ID: PropTypes.string.isRequired,
    STRING: PropTypes.string.isRequired,
  }).isRequired,
  rootProps: PropTypes.shape({
    className: PropTypes.string,
  }),
}

ACLCardReadableRule.displayName = 'ACLCardCLI'

export default ACLCardReadableRule