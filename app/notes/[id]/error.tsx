'use client';

export default function Error({ error }) {
  return <p>{`Could not fetch note details. ${error.message}`}</p>;
}
