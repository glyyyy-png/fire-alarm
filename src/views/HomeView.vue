<template>
  <div class="app-container">
    <!-- Header -->
    <div class="header">
    </div>

    <!-- Main Content -->
    <div class="main-content">
      <!-- Title -->
      <h1 class="page-title">STATUS OVERVIEW</h1>

      <!-- Status Circle -->
      <div class="status-section">
        <div class="status-circle">
          <div class="status-icon-container">
            <Bell class="status-bell-icon" />
          </div>
        </div>
        <div class="status-label">SAFE</div>
      </div>

      <!-- Time and Date -->
      <div class="time-section">
        <div class="current-time">10:04</div>
        <div class="current-date">Monday, April 14</div>
      </div>

      <!-- Location -->
      <div class="location-section">
        <MapPin class="location-icon" />
        <span class="location-text">Bansud Public Market</span>
      </div>

      <!-- Recent Status History -->
      <div class="history-section">
        <h2 class="history-title">RECENT STATUS HISTORY</h2>
        
        <div class="history-list">
          <!-- Safe Event 1 -->
          <div class="history-item">
            <div class="history-left">
              <div class="history-icon safe">
                <Check class="icon" />
              </div>
              <div class="history-info">
                <div class="history-status">Safe</div>
                <div class="history-time">10:04 am, April 14, 2025</div>
              </div>
            </div>
            <div class="history-temperature">20°C</div>
          </div>

          <!-- Safe Event 2 -->
          <div class="history-item">
            <div class="history-left">
              <div class="history-icon safe">
                <Check class="icon" />
              </div>
              <div class="history-info">
                <div class="history-status">Safe</div>
                <div class="history-time">7:22 pm, April 13, 2025</div>
              </div>
            </div>
            <div class="history-temperature">25°C</div>
          </div>

          <!-- Alert Event -->
          <div class="history-item">
            <div class="history-left">
              <div class="history-icon alert">
                <AlertTriangle class="icon" />
              </div>
              <div class="history-info">
                <div class="history-status">Alert</div>
                <div class="history-time">4:33 pm, April 12, 2025</div>
              </div>
            </div>
            <div class="history-temperature">70°C</div>
          </div>
        </div>

        <!-- View Full History Link -->
        <div class="view-full-history">
          <a href="#" class="history-link">View Full History</a>
        </div>
      </div>
    </div>

    <!-- Bottom Navigation -->
    <div class="bottom-nav">
     <router-link to="/" class="nav-item">
        <Bell class="nav-icon" />
        <span class="nav-label">home</span>
      </router-link>

      <button class="nav-item">
        <MapPin class="nav-icon" />
        <span class="nav-label">location</span>
      </button>
      <router-link to="/notifications" class="nav-item">
        <Bell class="nav-icon" />
        <span class="nav-label">Notification</span>
      </router-link>

      <button class="nav-item">
        <Settings class="nav-icon" />
        <span class="nav-label">settings</span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { 
  Bell, 
  MapPin, 
  Check, 
  AlertTriangle, 
  Home, 
  Settings 
} from 'lucide-vue-next'
</script>

<style scoped>
.app-container {
  max-width: 400px;
  margin: 0 auto;
  background-color: #f8f9fa;
  min-height: 100vh;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.header {
  background-color: #dc2626;
  height: 60px;
}

.main-content {
  padding: 24px 20px;
  padding-bottom: 100px;
}

.page-title {
  font-size: 24px;
  font-weight: 700;
  color: #374151;
  text-align: center;
  margin: 0 0 40px 0;
  letter-spacing: 0.5px;
}

.status-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 32px;
}

.status-circle {
  width: 140px;
  height: 140px;
  background: linear-gradient(135deg, #dcfce7 0%, #bbf7d0 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
  position: relative;
}

.status-circle::before {
  content: '';
  position: absolute;
  width: 100px;
  height: 100px;
  background-color: #22c55e;
  border-radius: 50%;
  box-shadow: 0 4px 12px rgba(34, 197, 94, 0.3);
}

.status-icon-container {
  position: relative;
  z-index: 1;
}

.status-bell-icon {
  width: 40px;
  height: 40px;
  color: white;
}

.status-label {
  background-color: #bbf7d0;
  color: #166534;
  font-size: 18px;
  font-weight: 700;
  padding: 8px 24px;
  border-radius: 6px;
  letter-spacing: 1px;
}

.time-section {
  text-align: center;
  margin-bottom: 24px;
}

.current-time {
  font-size: 48px;
  font-weight: 300;
  color: #111827;
  margin-bottom: 4px;
}

.current-date {
  font-size: 16px;
  color: #6b7280;
  font-weight: 500;
}

.location-section {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-bottom: 40px;
}

.location-icon {
  width: 20px;
  height: 20px;
  color: #374151;
}

.location-text {
  font-size: 16px;
  color: #374151;
  font-weight: 500;
}

.history-section {
  margin-top: 32px;
}

.history-title {
  font-size: 16px;
  font-weight: 700;
  color: #374151;
  margin: 0 0 20px 0;
  letter-spacing: 0.5px;
}

.history-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 24px;
}

.history-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.history-left {
  display: flex;
  align-items: center;
  gap: 12px;
}

.history-icon {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.history-icon.safe {
  background-color: #22c55e;
}

.history-icon.alert {
  background-color: #eab308;
}

.icon {
  width: 14px;
  height: 14px;
  color: white;
}

.history-info {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.history-status {
  font-size: 16px;
  font-weight: 600;
  color: #111827;
}

.history-time {
  font-size: 13px;
  color: #6b7280;
}

.history-temperature {
  font-size: 20px;
  font-weight: 700;
  color: #111827;
}

.view-full-history {
  text-align: center;
  margin-top: 24px;
}

.history-link {
  color: #374151;
  text-decoration: underline;
  font-size: 16px;
  font-weight: 500;
}

.history-link:hover {
  color: #111827;
}

.bottom-nav {
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 400px;
  background: white;
  border-top: 1px solid #e5e7eb;
  display: flex;
  justify-content: space-around;
  padding: 8px 0;
}

.nav-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px 16px;
  background: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
}

.nav-item.active .nav-icon {
  color: #dc2626;
}

.nav-item.active .nav-label {
  color: #dc2626;
}

.nav-icon {
  width: 24px;
  height: 24px;
  color: #9ca3af;
  margin-bottom: 4px;
}

.nav-label {
  font-size: 12px;
  color: #9ca3af;
}

.nav-item:hover .nav-icon,
.nav-item:hover .nav-label {
  color: #6b7280;
}
</style>