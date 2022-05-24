import React from 'react'

export default function BreadCrumBar(props) {
  return (
    <div class="breadcrumb-bar">
    <div class="container-fluid">
      <div class="row align-items-center">
        <div class="col-md-12 col-12">
          <nav aria-label="breadcrumb" class="page-breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <a href="index.html">{props.main}</a>
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                {props.name}
              </li>
            </ol>
          </nav>
          <h2 class="breadcrumb-title">{props.title}</h2>
        </div>
      </div>
    </div>
  </div>
  )
}
