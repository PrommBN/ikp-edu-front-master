'use client'
import React from 'react'
import { Toaster } from 'react-hot-toast';
type Props = {}

export default function Toast_Provider({}: Props) {
  return (
    <div><Toaster/></div>
  )
}