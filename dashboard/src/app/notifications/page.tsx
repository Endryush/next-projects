'use client';
import Layout from '@/components/template/Layout';
import useAppData from '@/data/hook/useThemeData';

export default function Notifications() {
  const { toggleTheme } = useAppData()
  return (
    <Layout title="Notificações" subtitle="Gerencie suas notificações">
      <h3>Notificações content</h3>
    <button onClick={toggleTheme}>mudar tema</button>
    </Layout>
  );
}
