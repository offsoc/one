/* ------------------------------------------------------------------------- *
 * Copyright 2002-2021, OpenNebula Project, OpenNebula Systems               *
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
/* eslint-disable jsdoc/require-jsdoc */
import * as yup from 'yup'

import Template from './Template'
import BasicConfiguration from './BasicConfiguration'
import Connection from './Connection'

const Steps = ({ isUpdate }) => {
  const template = Template()
  const configuration = BasicConfiguration({ isUpdate })
  const connection = Connection({ isUpdate })

  const steps = [configuration, connection]
  !isUpdate && steps.unshift(template)

  const resolvers = () => yup
    .object({
      [template.id]: template.resolver(),
      [configuration.id]: configuration.resolver(),
      [connection.id]: connection.resolver()
    })

  const defaultValues = resolvers().default()

  return { steps, defaultValues, resolvers }
}

export default Steps