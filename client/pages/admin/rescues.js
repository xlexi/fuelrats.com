// Module imports
import React from 'react'





// Component imports
import PageWrapper from '../../components/PageWrapper'
import RescuesTablePanel from '../../components/RescuesTablePanel'





const Rescues = () => (
  <PageWrapper title="Rescues">
    <div className="page-content">
      <div className="filters-group">
        <input type="checkbox" aria-hidden="true" className="filters-toggle" hidden id="filters" name="filters" />

        <label htmlFor="filters"><span>Expand / collapse</span></label>

        <div className="filters">
          <input type="text" aria-label="CMDR name" placeholder="CMDR name" />

          <div className="filter-group">
            <label htmlFor="created-after">Created after</label>
            <input type="date" name="created-after" aria-label="Created after" />
          </div>

          <div className="filter-group">
            <label htmlFor="created-before">Created before</label>
            <input type="date" name="created-before" aria-label="Created before" />
          </div>

          <div className="filter-group">
            <label htmlFor="updated-after">Updated after</label>
            <input type="date" name="updated-after" aria-label="Updated after" />
          </div>

          <div className="filter-group">
            <label htmlFor="updated-before">Updated before</label>
            <input type="date" name="updated-before" aria-label="Updated before" />
          </div>

          <button type="button" aria-label="marked for deletion" className="dropdown">
            Marked For Deletion
            <div className="menu">
              <input type="checkbox" id="md-true" value="md-true" name="md-true" aria-label="marked for deletion true" /><label htmlFor="md-true">True</label>
              <input type="checkbox" id="md-false" value="md-false" name="md-false" aria-label="marked for deletion false" /><label htmlFor="md-false">False</label>
            </div>
          </button>

          <button type="button" aria-label="platform" className="dropdown">
            Platform
            <div className="menu">
              <input type="checkbox" id="platform-pc" value="pc" name="platform-pc" aria-label="platform pc" /><label htmlFor="platform-pc">PC</label>
              <input type="checkbox" id="platform-xb" value="xb" name="platform-xb" aria-label="platform xb" /><label htmlFor="platform-xb">XB</label>
              <input type="checkbox" id="platform-ps" value="ps" name="platform-ps" aria-label="platform ps" /><label htmlFor="platform-ps">PS</label>
              <input type="checkbox" id="platform-null" value="null" name="platform-null" aria-label="platform null" /><label htmlFor="platform-null">null</label>
            </div>
          </button>

          <button type="button" aria-label="status" className="dropdown">
            Status
            <div className="menu">
              <input type="checkbox" id="status-open" value="open" name="status-open" aria-label="status open" /><label htmlFor="status-open">Open</label>
              <input type="checkbox" id="status-closed" value="closed" name="status-closed" aria-label="status closed" /><label htmlFor="status-closed">Closed</label>
              <input type="checkbox" id="status-inactive" value="inactive" name="status-inactive" aria-label="status inactive" /><label htmlFor="status-inactive">Inactive</label>
            </div>
          </button>

          <button type="button" aria-label="outcome" className="dropdown">
            Outcome
            <div className="menu">
              <input type="checkbox" id="outcome-success" value="success" name="outcome-success" aria-label="outcome success" /><label htmlFor="outcome-success">Success</label>
              <input type="checkbox" id="outcome-Failure" value="Failure" name="outcome-Failure" aria-label="outcome Failure" /><label htmlFor="outcome-Failure">Failure</label>
              <input type="checkbox" id="outcome-invalid" value="invalid" name="outcome-invalid" aria-label="outcome invalid" /><label htmlFor="outcome-invalid">Invalid</label>
              <input type="checkbox" id="outcome-other" value="other" name="outcome-other" aria-label="outcome other" /><label htmlFor="outcome-other">Other</label>
              <input type="checkbox" id="outcome-null" value="null" name="outcome-null" aria-label="outcome null" /><label htmlFor="outcome-null">null</label>
            </div>
          </button>

          <button type="button" aria-label="code-red" className="dropdown">
            Code Red
            <div className="menu">
              <input type="checkbox" id="code-red-true" value="true" name="code-red-true" aria-label="code-red true" /><label htmlFor="code-red-true">True</label>
              <input type="checkbox" id="code-red-failure" value="Failure" name="code-red-failure" aria-label="code-red Failure" /><label htmlFor="code-red-failure">False</label>
            </div>
          </button>

          <input type="text" aria-label="rat" placeholder="Rat" />
        </div>
      </div>

      <RescuesTablePanel />
    </div>
  </PageWrapper>
)

Rescues.authRequired = true

export default Rescues
