import { LeadData } from '../types';

// Replace with your current deployment URL
const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyUnzwLgKn7d5vyPc4x553SZFVCawDSwJhQ15NQoWyUbIXrF2uxaEn4R_vGpgimOS278A/exec';

export const submitLead = async (data: LeadData): Promise<boolean> => {
  try {
    console.log('Initiating Nuclear Sync Sequence v10.0...');
    
    // We send as a standard URL-encoded string for maximum compatibility with Google's parsers
    const payload = new URLSearchParams();
    payload.append('Name', data.Name.trim());
    payload.append('Phone', data.Phone.trim());
    payload.append('Email', data.Email.trim());
    payload.append('BusinessName', data.BusinessName.trim());
    payload.append('EmployeeSize', data.EmployeeSize);

    await fetch(SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: payload.toString(),
    });

    // In no-cors, we assume success if the fetch doesn't throw.
    return true;
  } catch (error) {
    console.error('B2B Sync Engine Critical Failure:', error);
    return false;
  }
};